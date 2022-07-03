import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MuseumService } from 'src/app/application/services/museum-service';
import { Image } from 'src/app/core/entities/image-data';
import { SearchParams } from 'src/app/core/entities/search-params';
import { IView } from 'src/app/core/entities/view';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [
        'home.component.css'
    ]
})

export class HomeComponent extends IView {
    images: Image[] = [];
    museumService: MuseumService;
    public static override animationId = "Home";

    constructor(museumService: MuseumService, private router: Router) { 
        super();
        this.museumService = museumService;
        this.images = this.museumService.getArtworks(1, <SearchParams>{}).map(a => ({imageId: a.id.toString(), imageUrl: a.imageUrl}) );
    }

    carouselClickCurrent(image: Image): void {
        this.router.navigate([`artworks/1/${image.imageId}`]);
    }


}