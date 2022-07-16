/* eslint-disable  @typescript-eslint/no-explicit-any */

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, map, mergeMap, Observable } from "rxjs";
import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { CustomHttpParamEncoder } from "../../utils/CustomHttpParamEncoder";
import { ARTWORKS_ENDPOINT, AUTH_TOKEN, PARAMS_EQUIVALENCE, RIJKS_URL } from "./constants";
import { convertParams, transformArtworkObject } from "./utils";

@Injectable()
export class RijksProvider {
    museum: Museum;

    constructor(private httpClient: HttpClient) {
        this.museum = {
            id: 1,
            name: 'Rijks Museum',
            location: 'The Netherlands',
            description: 'A cool museum'
        }
        
    }

    getArtworks(params: SearchParams): Observable<Artwork[]> {
        const url = RIJKS_URL;

        const options = {
            params: this.paramsTransformer(params)
        };

        console.log(options);
        
        const initialArtworks$ = this.httpClient.get(url, options)
            .pipe(
                map((a: any) => this.transformArtworkObjects(a.artObjects)),
                mergeMap(artworks => {
                    const tilesRequests$: Observable<Artwork>[] = [];

                    artworks.forEach(a => {
                        const request$ = this.httpClient.get(`https://www.rijksmuseum.nl/api/nl/collection/${a.internalId}/tiles?key=yluGpPtn`)
                            .pipe(
                                map((tile: any) => {
                                    const newImageUrl = tile.levels.filter((l: any) => l.name === 'z4')[0].tiles.filter((t: any) => t.x === 0 && t.y === 0)[0].url;
                                    
                                    return {
                                        ...a,
                                        imageUrl: newImageUrl
                                    } as Artwork
                                })
                            );

                        tilesRequests$.push(request$);
                    });

                    return forkJoin(tilesRequests$)
                })
            );
        
        return initialArtworks$
    }

    getMuseumInfo(): Museum {
        return this.museum;
    }

    getArtwork(id: string): Observable<Artwork> {
        const url = `${RIJKS_URL}/${id}?key=yluGpPtn`;

        return this.httpClient.get(url)
            .pipe(map((a: any) => transformArtworkObject(a.artObject)));
    }

    paramsTransformer(params: SearchParams): HttpParams {
        let httpParams = new HttpParams({ encoder: new CustomHttpParamEncoder() });

        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                if (params[key as keyof SearchParams]) {
                    const parameterNameKey = key as keyof SearchParams;
                    httpParams = httpParams.set(PARAMS_EQUIVALENCE[parameterNameKey], params[parameterNameKey]);

                }
            }
        }

        httpParams = httpParams.set('key', 'yluGpPtn')
        
        return httpParams;
    }

    private transformArtworkObjects(rawArtworks: []): Artwork[] {
        const artworks: Artwork[] = [];

        rawArtworks.forEach((a: any) => {
            artworks.push(transformArtworkObject(a))
        })

        return artworks;
    }

    // private replaceImageUrl(artwork: Artwork): Artwork {
    //     let tilesUrl = RIJKS_URL + ARTWORK_TILES + AUTH_TOKEN;
    //     tilesUrl = tilesUrl.replace('objectNumber', artwork.internalId);

    //     this.httpClient.get(tilesUrl).subscribe((response: any) => {
    //         const imageUrl = response?.levels.filter((l: any) => l.name === 'z4')[0].tiles.filter((t: any) => t.x === 0 && t.y === 0)[0].url;
    //         artwork.imageUrl = imageUrl;

    //     })
    // }

}