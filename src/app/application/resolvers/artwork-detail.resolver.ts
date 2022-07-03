import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Artwork } from 'src/app/core/entities/artwork';
import { MuseumService } from '../services/museum-service';

@Injectable()
export class ArtworkDetailResolver implements Resolve<Artwork> {
    constructor(private museumService: MuseumService) {
        
        
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Artwork> | Promise<Artwork> | Artwork {
        const museumId = +route.params['museumId'];
        const artworkId = route.params['artworkId'];

        return this.museumService.getArtwork(museumId, artworkId);
    }
}