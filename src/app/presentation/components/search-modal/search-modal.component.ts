import { Component, ElementRef, ViewChild } from '@angular/core';
import { MATERIALS, TECHNIQUES } from './search-data';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, of, startWith } from 'rxjs';

@Component({
    selector: 'search-modal',
    templateUrl: 'search-modal.component.html',
    styleUrls: [
        'search-modal.component.css'
    ]
})

export class SearchModalComponent {
    materialsControl = new FormControl('');
    filteredMaterials: Observable<string[]> = of([]);

    @ViewChild('materialsInput') materialsInput: ElementRef<HTMLInputElement>;

    author = '';
    materials: string[] = [];
    techniques: string [] = [];
    artworkCentury = '';
    description = '';
    allMaterials = MATERIALS;
    allTechniques = TECHNIQUES;

    separatorsKeys = [ENTER, COMMA];

    constructor() {
        this.filteredMaterials = this.materialsControl.valueChanges.pipe(
            startWith(null),
            map((material: string | null) => (material ? this.filterMaterials(material) : this.allMaterials.slice()))
        )
    }

    removed(material: string) {
        const indexToDelete = this.materials.indexOf(material);
        this.materials.splice(indexToDelete, 1);
        
    }

    addMaterial(event: MatChipInputEvent) {
        const value = (event.value || '').trim();
        event.chipInput.clear();
        if (!this.materials.includes(value)) {
            this.materials.push(value);
        }
        
    }

    materialSelected(event: MatAutocompleteSelectedEvent) {
       const value = event.option.viewValue;

       if (!this.materials.includes(value))
        this.materials.push(value);

       this.materialsInput.nativeElement.value = '';
       this.materialsControl.setValue(null);
    }

    filterMaterials(text: string) {
        return this.allMaterials.filter(material => material.toLowerCase().includes(text.toLowerCase()));
    }

    try() {
        console.log("values", { techniques: this.techniques });
        
    }
}