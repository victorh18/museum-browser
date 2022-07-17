/* eslint-disable  @typescript-eslint/no-explicit-any */

import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, forkJoin, map, mergeMap, Observable, of, throwError } from "rxjs";
import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { BadRequestError } from "src/app/core/exceptions/BadRequestError";
import { NetworkError } from "src/app/core/exceptions/NetworkError";
import { CustomHttpParamEncoder } from "../../utils/CustomHttpParamEncoder";
import { PARAMS_EQUIVALENCE, RIJKS_URL } from "./constants";
import { transformArtworkObject } from "./utils";

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
                }),
                catchError(this.handleError)
            );
        
        return initialArtworks$
    }

    getMuseumInfo(): Museum {
        return this.museum;
    }

    getArtwork(id: string): Observable<Artwork> {
        const url = `${RIJKS_URL}/${id}`;

        return this.httpClient.get(url)
            .pipe(map((a: any) => transformArtworkObject(a.artObject)), catchError(this.handleError));
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
        
        return httpParams;
    }

    private transformArtworkObjects(rawArtworks: []): Artwork[] {
        const artworks: Artwork[] = [];

        rawArtworks.forEach((a: any) => {
            artworks.push(transformArtworkObject(a))
        })

        return artworks;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 401) {
            return throwError(() => new BadRequestError('Wrong auth key used. Please, contact the page maintainer.', error.url ?? '', 401, null));
        } 

        return throwError(() => new NetworkError('Wrong auth key used. Please, contact the page maintainer.', error.url ?? '', null));
    }

}