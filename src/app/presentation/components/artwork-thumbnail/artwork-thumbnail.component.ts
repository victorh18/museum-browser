import { Component, ElementRef, Input, ViewChild, AfterViewInit } from "@angular/core";
import { Artwork } from "src/app/core/entities/artwork";

@Component({
    selector: 'artwork-thumbnail',
    templateUrl: './artwork-thumbnail.component.html',
    styleUrls: [
        './artwork-thumbnail.component.css'
    ]
})
export class ArtworkThumbnail implements AfterViewInit{
    @Input() artwork: Artwork
    @ViewChild('thumbnailContainer') thumbnailContainer: ElementRef;

    ngAfterViewInit(): void {
        const imageDiv = this.thumbnailContainer.nativeElement.children[0].children[0];
        this.thumbnailContainer.nativeElement.addEventListener('mouseover', () => {
            imageDiv.setAttribute('style', "transform: scale(1.1)")
        })

        this.thumbnailContainer.nativeElement.addEventListener('mouseout', () => {
            imageDiv.setAttribute('style', "transform: scale(1)")

        })
    }
    
}