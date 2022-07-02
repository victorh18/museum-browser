import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from 'src/app/core/entities/artwork';

@Component({
    selector: 'artwork-details',
    templateUrl: 'artwork-details.component.html',
    styleUrls: [
        './artwork-details.component.css'
    ]
})

export class ArtworkDetailsComponent implements OnInit{
    artwork: Artwork = <Artwork>{};

    constructor(private activatedRoute:ActivatedRoute) {
        
    }

    ngOnInit() {
        this.activatedRoute.data.forEach(data => {
            this.artwork = data['artwork'];
        })
    }
}