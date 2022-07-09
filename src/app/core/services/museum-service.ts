import { Artwork } from "../entities/artwork";
import { Museum } from "../entities/museum";
import { SearchParams } from "../entities/search-params";
import { MuseumProvider } from "../providers/museum-provider";

export interface IMuseumService {
    museumProviders: MuseumProvider[];

    getMuseumProvider(museumId: number): MuseumProvider,
    getArtworks(museumId: number, params: SearchParams): Artwork[];
    getArtwork(museumId: number, id: string): Artwork;
    getMuseumInfo(museumId: number): Museum;
}