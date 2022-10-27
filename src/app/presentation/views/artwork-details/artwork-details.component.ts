import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from 'src/app/core/entities/artwork';
import { IView } from 'src/app/core/entities/view';

@Component({
    selector: 'artwork-details',
    templateUrl: 'artwork-details.component.html',
    styleUrls: [
        './artwork-details.component.css'
    ]
})

export class ArtworkDetailsComponent extends IView implements OnInit {
    public static override animationId = "ArtworkDetails";
    imageLoaded = false;
    artwork: Artwork = <Artwork>{};
    
    constructor(private activatedRoute:ActivatedRoute) {
        super();
    }


    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.artwork = data['artwork'];
        })
    }

    onImageLoad() {
        this.imageLoaded = true;
    }
}