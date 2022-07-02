import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { IMuseumProvider } from "src/app/core/providers/museum-provider";
import { Artworks } from "./artworks";

export class ProviderMock implements IMuseumProvider {
    museum: Museum;

    constructor() {
        this.museum = {
            id: 1,
            name: 'Rijks Museum',
            location: 'The Netherlands',
            description: 'A cool museum'
        }
    }
    getArtworks(params: SearchParams): Artwork[] {
        return Artworks;
    }
    getMuseumInfo(museumId: number): Museum {
        return this.museum;
    }
    getArtwork(id: string): Artwork {
        return this.getArtworks(<SearchParams>{}).filter(a => a.id === +id || a.internalId === id)[0];
    }
    paramsTransformer(params: SearchParams): string {
        return params.searchText;
    }

}