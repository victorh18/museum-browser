import { Component } from '@angular/core';

@Component({
    selector: 'test-view',
    templateUrl: 'test-view.component.html'
})

export class TestViewComponent {
    constructor() { 
        console.log('TestView');
        
    }
}