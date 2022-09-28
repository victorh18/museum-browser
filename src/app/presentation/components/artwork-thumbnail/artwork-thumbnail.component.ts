import { Component, Input } from "@angular/core";

@Component({
    selector: 'artwork-thumbnail',
    templateUrl: './artwork-thumbnail.component.html',
    styleUrls: [
        './artwork-thumbnail.component.css'
    ]
})
export class ArtworkThumbnail {
    @Input() imageUrl: string

}