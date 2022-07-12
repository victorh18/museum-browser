/* eslint-disable  @typescript-eslint/no-explicit-any */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { MuseumProvider } from "src/app/core/providers/museum-provider";
import { ARTWORKS_ENDPOINT, RIJKS_URL } from "./constants";
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
        const url = `${RIJKS_URL}${ARTWORKS_ENDPOINT}?key=yluGpPtn&q=death`;

        return this.httpClient.get(url)
            .pipe(map((a: any) => this.transformArtworkObjects(a.artObjects)));
    }
    getMuseumInfo(museumId: number): Museum {
        return this.museum;
    }
    getArtwork(id: string): Observable<Artwork> {
        const url = `${RIJKS_URL}${id}?key=yluGpPtn`;

        return this.httpClient.get(url)
            .pipe(map((a: any) => transformArtworkObject(a.artObject)));
    }
    paramsTransformer(params: SearchParams): string {
        return params.searchText;
    }

    private transformArtworkObjects(rawArtworks: []): Artwork[] {
        const artworks: Artwork[] = [];

        rawArtworks.forEach((a: any, i) => {
            artworks.push(transformArtworkObject(a))
        })

        return artworks;
    }

}