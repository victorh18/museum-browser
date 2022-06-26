import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MuseumService } from 'src/app/application/services/museum-service';
import { Image } from 'src/app/core/entities/image-data';
import { SearchParams } from 'src/app/core/entities/search-params';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [
        'home.component.css'
    ]
})

export class HomeComponent {
    images: Image[] = [];
    museumService: MuseumService

    constructor(museumService: MuseumService, private router: Router) { 
        this.museumService = museumService;
        this.images = this.museumService.getArtworks(1, <SearchParams>{}).map(a => ({imageId: a.id.toString(), imageUrl: a.imageUrl}) );
    }

    carouselClickCurrent(image: Image): void {
        console.log("before routing");
        
        this.router.navigate([`artworks/1/${image.imageId}`]);
    }


}