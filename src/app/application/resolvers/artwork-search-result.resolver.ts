import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Artwork } from 'src/app/core/entities/artwork';
import { MuseumService } from '../services/museum-service';


@Injectable({ providedIn: 'root' })
export class ArtworkSearchResultResolver implements Resolve<Artwork[]> {
    constructor(private museumService: MuseumService, private router: Router) {
 
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Artwork[]> | Promise<Artwork[]> | Artwork[] {
        const routeState = this.router.getCurrentNavigation()?.extras.state;
        const searchParams = routeState && routeState['searchParams'];

        return this.museumService.getArtworks(1, searchParams);
    }
}