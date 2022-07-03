import { Routes } from '@angular/router';
import { ArtworkDetailResolver } from 'src/app/application/resolvers/artwork-detail.resolver';
import { ArtworkDetailsComponent } from '../views/artwork-details/artwork-details.component';
import { HomeComponent } from '../views/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { animation: HomeComponent.animationId } }, 
    { path: 'artworks/:museumId/:artworkId', component: ArtworkDetailsComponent, resolve: { artwork: ArtworkDetailResolver }, data: { animation: ArtworkDetailsComponent.animationId } },
   
]