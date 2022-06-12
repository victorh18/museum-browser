import { Artwork } from "../entities/artwork";
import { Museum } from "../entities/museum";
import { SearchParams } from "../entities/search-params";
import { IMuseumProvider } from "../providers/museum-provider";

export interface IMuseumService {
    museumProviders: IMuseumProvider[];

    getMuseumProvider(museumId: number): IMuseumProvider,
    getArtworks(params: SearchParams): Artwork[];
    getMuseumInfo(museumId: number): Museum;
}