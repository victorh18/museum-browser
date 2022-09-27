import { compilePipeFromMetadata } from "@angular/compiler";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { map, tap } from "rxjs";
import { ChipMultiSelectComponent } from "src/app/presentation/components/chip-multiselect/chip-multiselect.component";
import { MATERIALS } from "src/app/presentation/components/search-modal/search-data";

describe("Multi-select chip component...", () => {
    let fixture: ComponentFixture<ChipMultiSelectComponent>;
    let component: ChipMultiSelectComponent;
    let element: HTMLElement;
   
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChipMultiSelectComponent,
                
            ],
            imports: [
                MatAutocompleteModule
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })

        fixture = TestBed.createComponent(ChipMultiSelectComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });
    
    
    it("...should filter upon user input.", () => {
        const FILTER_VALUE = 'oil';
        const EXPECTED_RESULT = ['oil paint (paint)'];

        component.filteredValues.subscribe(result => {
            if (component.allValues.length > 0) {
                expect(result).toEqual(EXPECTED_RESULT);
            }
        });

        component.allValues = MATERIALS;
 
        component.multiselectControl.setValue(FILTER_VALUE);

    });
    
    it("...should return all items when selection is cleaned.", () => {
        component.filteredValues.subscribe(result => {
            if (component.multiselectControl.getRawValue() == "" && component.allValues.length > 0) {
                expect(result).toEqual(component.allValues);
                console.log('asserted');
                
            }
        })

        component.allValues = MATERIALS;
        component.multiselectControl.setValue('oil');
        component.multiselectControl.setValue('');

    });

    it("...should allow multiple item selection.", () => {
        component.allValues = MATERIALS;
        component.addValue(MATERIALS[0]);
        component.addValue(MATERIALS[1]);

        expect(component.values).toEqual([MATERIALS[0], MATERIALS[1]]);
    });

    it("...should allow to remove items from the user's selection.", () => {
        component.allValues = MATERIALS;
        component.addValue(MATERIALS[0]);
        component.addValue(MATERIALS[1]);
        component.addValue(MATERIALS[2]);

        expect(component.values).toEqual([MATERIALS[0], MATERIALS[1], MATERIALS[2]]);

        component.removed(MATERIALS[1]);

        expect(component.values).toEqual([MATERIALS[0], MATERIALS[2]])
    });
})