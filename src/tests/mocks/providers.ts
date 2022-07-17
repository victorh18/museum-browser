import { HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { Artworks } from "./artworks";

export class ProviderMock {
    museum: Museum;

    constructor() {
        this.museum = {
            id: 1,
            name: 'Rijks Museum',
            location: 'The Netherlands',
            description: 'A cool museum'
        }
    }
    getArtworks(params: SearchParams): Observable<Artwork[]> {
        return of(Artworks);
    }
    getMuseumInfo(museumId: number): Museum {
        return this.museum;
    }
    getArtwork(id: string): Observable<Artwork> {
        const artwork = Artworks.filter(a => a.internalId === id)[0]
        return of(artwork);
    }
    paramsTransformer(params: SearchParams): HttpParams {
        return new HttpParams();
    }

}