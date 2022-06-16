import { Artwork } from "./artwork";
import { Museum } from "./museum";

export interface Collection {
    id: number,
    artworks: Artwork[],
    museum: Museum
}