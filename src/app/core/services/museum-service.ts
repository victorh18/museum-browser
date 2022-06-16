import { Artwork } from "../entities/artwork";
import { Museum } from "../entities/museum";
import { SearchParams } from "../entities/search-params";
import { IMuseumProvider } from "../providers/museum-provider";

export interface IMuseumService {
    museumProviders: IMuseumProvider[];

    getMuseumProvider(museumId: number): IMuseumProvider,
    getArtworks(museumId: number, params: SearchParams): Artwork[];
    getArtwork(museumId: number, id: string): Artwork;
    getMuseumInfo(museumId: number): Museum;
}