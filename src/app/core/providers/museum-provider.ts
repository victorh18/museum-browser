import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Artwork } from "../entities/artwork";
import { Museum } from "../entities/museum";
import { SearchParams } from "../entities/search-params";

export abstract class MuseumProvider {
    abstract museum: Museum;

    abstract getArtworks(params: SearchParams): Observable<Artwork[]>;
    abstract getMuseumInfo(museumId: number): Museum;
    abstract getArtwork(id: string): Artwork;
    abstract paramsTransformer(params: SearchParams): string
}

export const MUSEUM_PROVIDERS_TOKEN = new InjectionToken<MuseumProvider[]>("MuseumProviders");