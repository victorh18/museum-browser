import { Component, Input } from '@angular/core';

@Component({
    selector: 'carousel-button',
    templateUrl: 'carousel-button.component.html',
    styleUrls: [ 'carousel-button.component.css' ] 
})

export class CarouselButtonComponent {
    @Input() icon = "";

}