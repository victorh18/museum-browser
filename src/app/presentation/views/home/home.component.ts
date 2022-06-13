import { Component } from '@angular/core';
import { MuseumService } from 'src/app/application/services/museum-service';
import { SearchParams } from 'src/app/core/entities/search-params';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    imageUrls: string[] = [];
    museumService: MuseumService

    constructor(museumService: MuseumService) { 
        this.museumService = museumService;
        this.imageUrls = this.museumService.getArtworks(1, <SearchParams>{}).map(a => a.imageUrl);
    }

}