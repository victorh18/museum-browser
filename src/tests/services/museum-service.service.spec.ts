import { MuseumService } from "src/app/application/services/museum-service";
import { ProviderMock } from "../mocks/providers";

describe("Museum service...", () => {
    let museumService: MuseumService;

    beforeEach(() => {
        museumService = new MuseumService([new ProviderMock()]);
    })
    
    it('...should return a specific artwork.', () => {
        const artworkId = "SK-C-5";
        const museumId = 1;
        const artwork = museumService.getArtwork(museumId, artworkId);

        expect(artwork.title).toBe("Me and the Bois");
        expect(artwork.internalId).toBe(artworkId);
    });
})