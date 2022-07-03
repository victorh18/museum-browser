import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselButtonComponent } from "src/app/presentation/components/carousel/carousel-button/carousel-button.component";
import { CarouselTileComponent } from "src/app/presentation/components/carousel/carousel-tile/carousel-tile.component";
import { CarouselComponent } from 'src/app/presentation/components/carousel/carousel.component';
import { Artworks } from 'src/tests/mocks/artworks';


describe('Carousel component...', () => {
    let fixture: ComponentFixture<CarouselComponent>;
    let component: CarouselComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CarouselComponent,
                CarouselTileComponent,
                CarouselButtonComponent
            ],
            imports: [
                BrowserAnimationsModule
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });

        fixture = TestBed.createComponent(CarouselComponent);
        component = fixture.componentInstance;

    })

    it('...should move to the next artwork.', () => {
        component.images = Artworks.map(a => ({imageUrl: a.imageUrl, imageId: a.internalId}));
        const initialIndex = component.currentIndex;
        
        component.moveNext();

        expect(component.currentIndex).toBe(initialIndex + 1);
    } );
    it('...should move to the previous artwork.', () => {
        component.images = Artworks.map(a => ({imageUrl: a.imageUrl, imageId: a.internalId}));
        const initialIndex = component.currentIndex;

        component.movePrevious();

        expect(component.currentIndex).toBe(initialIndex - 1);
    });
    it('...should show the first image after all images have been shown.', () => {
        component.images = Artworks.map(a => ({imageUrl: a.imageUrl, imageId: a.internalId}));
        component.currentIndex = component.images.length - 1;
        
        component.moveNext();

        expect(component.currentIndex).toBe(0);
    });
    it('...should show the last image after all images have been receded.', () => {
        component.images = Artworks.map(a => ({imageUrl: a.imageUrl, imageId: a.internalId}));
        component.currentIndex = 0;
        const lastImageIndex = Artworks.length - 1;

        component.movePrevious();

        expect(component.currentIndex).toBe(lastImageIndex);
    })

})