import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { MuseumProvider } from "src/app/core/providers/museum-provider";

@Injectable()
export class MuseumService {
    museumProviders: MuseumProvider[] = [];

    constructor(@Inject(MuseumProvider) public _museumProviders: MuseumProvider[]) {
        this.museumProviders = _museumProviders;
    }
    getArtwork(museumId: number, id: string): Observable<Artwork> {
        return this.getMuseumProvider(museumId).getArtwork(id);
    }

    getMuseumProvider(museumId: number): MuseumProvider {
        return this.museumProviders.filter(mp => mp.museum.id === museumId)[0];

    }
    getArtworks(museumId: number, params: SearchParams): Observable<Artwork[]> {
        return this.getMuseumProvider(museumId).getArtworks(params);
    }
    getMuseumInfo(museumId: number): Museum {
        return this.getMuseumProvider(museumId).museum;
    }

}