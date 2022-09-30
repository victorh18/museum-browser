import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ArtworkThumbnail } from "src/app/presentation/components/artwork-thumbnail/artwork-thumbnail.component";
import { Artworks } from "src/tests/mocks/artworks";

describe('Artwork thumbnail component...', () => {
    let fixture: ComponentFixture<ArtworkThumbnail>;
    let component: ArtworkThumbnail;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ArtworkThumbnail],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(ArtworkThumbnail);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    })

    it("...should show the artwork's title", () => {
        const testArtwork = Artworks[0];

        component.artwork = testArtwork;
        fixture.detectChanges();

        const displayedTitle = element.querySelector('#artworkThumbnailTitle')?.textContent;

        expect(displayedTitle).toBe(testArtwork.title);
    });

    it("...should show the artwork's author", () => {
        const testArtwork = Artworks[0];

        component.artwork = testArtwork;
        fixture.detectChanges();

        const displayedAuthor= element.querySelector('#artworkThumbnailAuthor')?.textContent;

        expect(displayedAuthor).toContain(testArtwork.author);
    });

    it("...should show the artwork's creation year", () => {
        const testArtwork = Artworks[0];

        component.artwork = testArtwork;
        fixture.detectChanges();

        const displayedText = element.querySelector('#artworkThumbnailAuthor')?.textContent;

        expect(displayedText).toContain(testArtwork.elaborationDate.getFullYear());
    });
});

