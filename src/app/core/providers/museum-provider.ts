import { HttpParams } from "@angular/common/http";
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Artwork } from "../entities/artwork";
import { Museum } from "../entities/museum";
import { SearchParams } from "../entities/search-params";

export abstract class MuseumProvider {
    abstract museum: Museum;

    abstract getArtworks(params: SearchParams): Observable<Artwork[]>;
    abstract getMuseumInfo(museumId: number): Museum;
    abstract getArtwork(id: string): Observable<Artwork>;
    abstract paramsTransformer(params: SearchParams): HttpParams;
}

export const MUSEUM_PROVIDERS_TOKEN = new InjectionToken<MuseumProvider[]>("MuseumProviders");