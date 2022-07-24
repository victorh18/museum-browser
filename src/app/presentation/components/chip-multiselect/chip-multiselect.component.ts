import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';

@Component({
    selector: 'chip-multiselect',
    templateUrl: 'chip-multiselect.component.html'
})

export class ChipMultiSelectComponent{
    @Input() values: string[] = [];
    @Input() label = '';
    @Input() allValues: string[] = [];
    @Output() valuesChange = new EventEmitter<string[]>();
    @Input() placeholder = '';
    @ViewChild('multiselectInput') multiselectInput: ElementRef<HTMLInputElement>;

    selectedValues: string[] = [];

    separatorsKeys = [ENTER, COMMA];
    filteredValues: Observable<string[]>;

    multiselectControl = new FormControl('');

    constructor() {
        this.filteredValues = this.multiselectControl.valueChanges.pipe(
            startWith(null),
            map((v: string | null) => this.filterValues(v))
        )
    }

    addValueFromSelection(event: MatChipInputEvent) {
        const value = event.value;
        this.addValue(value);
        event.chipInput.clear();     
    }

    valueSelected(event: MatAutocompleteSelectedEvent) {
        const value = event.option.value;
        this.addValue(value)
        this.multiselectInput.nativeElement.value = '';       
    }

    removed(value: string) {
        const indexToDelete = this.values.indexOf(value);
        this.values.splice(indexToDelete, 1);

        this.valuesChange.emit(this.values);
    }

    filterValues(value: string | null) {
        const returnValues = this.allValues.filter(v => v.includes(value || ''));
        console.log('filtered values', value, returnValues);
        
        return returnValues;
    }

    addValue(value: string) {
        if (value && !this.values.includes(value))  
            this.values.push(value);

        this.valuesChange.emit(this.values); 
    }

}