import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { ArtworkDetailsComponent } from "src/app/presentation/views/artwork-details/artwork-details.component";
import { Artworks } from "src/tests/mocks/artworks";

describe('Artwork details view...', () => {
    let fixture: ComponentFixture<ArtworkDetailsComponent>;
    let element: HTMLElement;
    const artwork = Artworks[0];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ArtworkDetailsComponent
            ],
            providers: [
                { provide: ActivatedRoute, useValue: {
                    data: [{artwork}]
                }} 
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })

        fixture = TestBed.createComponent(ArtworkDetailsComponent);
        element = fixture.nativeElement;

    })
    
    it("...should display artwork's title", () => {
        fixture.detectChanges();
        expect(element.querySelector('#artworkTitle')?.textContent).toBe(artwork.title);
    });
    it("...should display artwork's image", () => {
        fixture.detectChanges();
        expect(element.querySelector('#artworkImage')?.getAttribute('src')).toBe(artwork.imageUrl);
    });
    it("...should display artwork's author", () => {
        fixture.detectChanges();
        expect(element.querySelector('#artworkAuthor')?.textContent).toContain(artwork.author);
    });
    it("...should display artwork's description", () => {
        fixture.detectChanges();
        expect(element.querySelector('#artworkDescription')?.textContent).toContain(artwork.description);
    });
    it("...should display artwork's materials", () => {
        fixture.detectChanges();
        const materialsListElement = element.querySelector('#artworkMaterialsList')?.children ?? [];
        const materialsList: string[] = [];

        for (let i = 0; i < materialsListElement.length; i++) {
            materialsList.push(materialsListElement[i].textContent ?? '');
        }
        
        expect(materialsList).toEqual(artwork.materials);
    });
    it("...should display artwork's techniques", () => {
        fixture.detectChanges();
        const techniquesListElement = element.querySelector('#artworkTechniquesList')?.children ?? [];
        const techniquesList: string[] = [];

        for (let i = 0; i < techniquesListElement.length; i++) {
            techniquesList.push(techniquesListElement[i].textContent ?? '');
        }

        expect(techniquesList).toEqual(artwork.techniques);

    });

})