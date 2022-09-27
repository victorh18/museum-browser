import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef } from "@angular/material/dialog";
import { MATERIALS, TECHNIQUES } from "src/app/presentation/components/search-modal/search-data";
import { SearchModalComponent } from "src/app/presentation/components/search-modal/search-modal.component";

describe('Search modal component...', () => {
    let fixture: ComponentFixture<SearchModalComponent>;
    let component: SearchModalComponent;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchModalComponent
            ],
            imports: [],
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            providers: [
                {provide: MatDialogRef, useValue: {}},
            ]
        });

        fixture = TestBed.createComponent(SearchModalComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('...should return the correct search parameters upon user input', () => {
        const SAMPLE_PARAMS = { 
            author: 'Rembrandt', 
            materials: ['paper', 'photographic support'], 
            techniques: ['pen', 'gelatin silver print'], 
            artworkCentury: 'XV', 
            description: 'Test Description' 
        }

        component.author = 'Rembrandt',
        component.materials.push(MATERIALS[0]);
        component.materials.push(MATERIALS[1]);
        component.techniques.push(TECHNIQUES[3]);
        component.techniques.push(TECHNIQUES[4]);
        component.artworkCentury = 'XV';
        component.description = 'Test Description';

        const obtainParams = component.getParameters();

        expect(obtainParams).toEqual(SAMPLE_PARAMS);


    });

})