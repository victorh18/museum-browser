import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDetailResolver } from 'src/app/application/resolvers/artwork-detail.resolver';
import { ArtworkSearchResultResolver } from 'src/app/application/resolvers/artwork-search-result.resolver';
import { ArtworkDetailsComponent } from '../views/artwork-details/artwork-details.component';
import { HomeComponent } from '../views/home/home.component';
import { TestViewComponent } from '../views/test-view/test-view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { animation: HomeComponent.animationId } }, 
    { path: 'artworks/:museumId/:artworkId', component: ArtworkDetailsComponent, resolve: { artwork: ArtworkDetailResolver }, data: { animation: ArtworkDetailsComponent.animationId } },
    { path: 'test', component: TestViewComponent, resolve: {artworks: ArtworkSearchResultResolver}, runGuardsAndResolvers: 'always' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}