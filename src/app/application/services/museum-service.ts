import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { IMuseumProvider } from "src/app/core/providers/museum-provider";
import { IMuseumService } from "src/app/core/services/museum-service";
import { RijksProvider } from "../providers/rijks-provider";

export class MuseumService implements IMuseumService {
    museumProviders: IMuseumProvider[] = [];

    constructor() {
        this.museumProviders.push(new RijksProvider());
    }
    getArtwork(museumId: number, id: string): Artwork {
        return this.getMuseumProvider(museumId).getArtwork(id);
    }

    getMuseumProvider(museumId: number): IMuseumProvider {
        return this.museumProviders.filter(mp => mp.museum.id === museumId)[0];

    }
    getArtworks(museumId: number, params: SearchParams): Artwork[] {
        return this.getMuseumProvider(museumId).getArtworks(params);
    }
    getMuseumInfo(museumId: number): Museum {
        return this.getMuseumProvider(museumId).museum;
    }

}