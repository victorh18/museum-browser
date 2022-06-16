import { Artwork } from "../entities/artwork";
import { Museum } from "../entities/museum";
import { SearchParams } from "../entities/search-params";

export interface IMuseumProvider {
    museum: Museum,

    getArtworks(params: SearchParams): Artwork[];
    getMuseumInfo(museumId: number): Museum;
    getArtwork(id: string): Artwork;
    paramsTransformer(params: SearchParams): string
}