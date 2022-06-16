import { Component, Input } from '@angular/core';

@Component({
    selector: 'carousel-tile',
    templateUrl: 'carousel-tile.component.html',
    styleUrls: [
        'carousel-tile.component.css'
    ]
})

export class CarouselTileComponent {
    @Input() imageUrl = "";
}