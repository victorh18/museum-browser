import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MuseumService } from 'src/app/application/services/museum-service';
import { Image } from 'src/app/core/entities/image-data';
import { SearchParams } from 'src/app/core/entities/search-params';
import { IView } from 'src/app/core/entities/view';
import { BadRequestError } from 'src/app/core/exceptions/BadRequestError';
import { NetworkError } from 'src/app/core/exceptions/NetworkError';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: [
        'home.component.css'
    ]
})

export class HomeComponent extends IView implements OnInit {
    images: Image[] = [];
    isRedirecting = false;

    public static override animationId = "Home";

    constructor(private museumService: MuseumService, private router: Router) { 
        super();
        
    }
    ngOnInit(): void {
        const params: SearchParams = {
            author: 'Rembrandt+van+Rijn',
            searchText: '',
            materials: [],
            techniques: [],
            additionalInfo: ''
        };

        this.museumService.getArtworks(1, params).subscribe({
            next: (data) => {
                this.images = data.map((a) => (
                    {
                        imageId: a.internalId, 
                        imageUrl: a.imageUrl,
                        imageTitle: a.title,
                        imageAuthor: a.author
                    }
                ));
            },
            error: this.handleError
        })
        
    }

    carouselClickCurrent(image: Image): void {
        this.isRedirecting = true;
        this.router.navigate([`artworks/1/${image.imageId}`]);
    }

    handleError(err: any) {
        const errorType = err.name;

        const errorHandling = {
            [BadRequestError.name]: (err: BadRequestError) => {
                console.log('Something bad happened with the request.', { ...err });
            },
            [NetworkError.name]: (err: NetworkError) => {
                console.log('Something bad happened with the network.', { ...err });
            }
        }
        
        errorHandling[errorType](err);
    }
}