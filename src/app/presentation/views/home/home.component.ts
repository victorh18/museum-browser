import { Component, OnInit } from '@angular/core';
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

export class HomeComponent extends IView implements OnInit {
    images: Image[] = [];
    public static override animationId = "Home";

    constructor(private museumService: MuseumService, private router: Router) { 
        super();
        
    }
    ngOnInit(): void {
        this.museumService.getArtworks(1, <SearchParams>{}).subscribe((data) => {
            console.log("observer data: ", data);
            
            this.images = data.map((a) => ({imageId: a.internalId, imageUrl: a.imageUrl }) );
            console.log(this.images);
            
        })
    }

    carouselClickCurrent(image: Image): void {
        this.router.navigate([`artworks/1/${image.imageId}`]);
    }


}