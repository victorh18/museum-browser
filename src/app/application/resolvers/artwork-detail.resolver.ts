import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Artwork } from 'src/app/core/entities/artwork';
import { BadRequestError } from 'src/app/core/exceptions/BadRequestError';
import { NetworkError } from 'src/app/core/exceptions/NetworkError';
import { MuseumService } from '../services/museum-service';

@Injectable()
export class ArtworkDetailResolver implements Resolve<Artwork> {
    constructor(private museumService: MuseumService, private router: Router) {
        
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Artwork> | Promise<Artwork> | Artwork {
        const museumId = +route.params['museumId'];
        const artworkId = route.params['artworkId'];

        const artwork$ = this.museumService.getArtwork(museumId, artworkId)
            .pipe(catchError((err) => {
                this.router.navigate(['/']);
                this.handleError(err);
                return EMPTY;
            }));

        return artwork$;
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