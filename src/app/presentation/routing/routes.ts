import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDetailResolver } from 'src/app/application/resolvers/artwork-detail.resolver';
import { ArtworkDetailsComponent } from '../views/artwork-details/artwork-details.component';
import { HomeComponent } from '../views/home/home.component';
// impo rt { TestViewComponent } from '../views/test-view/test-view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { animation: HomeComponent.animationId } }, 
    { path: 'artworks/:museumId/:artworkId', component: ArtworkDetailsComponent, resolve: { artwork: ArtworkDetailResolver }, data: { animation: ArtworkDetailsComponent.animationId } },
    // { path: 'test', component: TestViewComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}