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

    it('...should move to the next artwork', () => {
        component.imageUrls = Artworks.map(a => a.imageUrl);
        
        expect(component.currentIndex).toBe(1);
        
        component.moveNext();
        fixture.detectChanges();

        expect(component.currentIndex).toBe(2);
    } );
    it('...should move to the previous artwork', () => {});

})