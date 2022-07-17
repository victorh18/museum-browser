import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselTileComponent } from './presentation/components/carousel/carousel-tile/carousel-tile.component';
import { CarouselButtonComponent } from './presentation/components/carousel/carousel-button/carousel-button.component';
import { CarouselComponent } from './presentation/components/carousel/carousel.component';
import { HomeComponent } from './presentation/views/home/home.component';
import { MuseumService } from './application/services/museum-service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { AppFooterComponent } from './presentation/components/app-footer/app-footer.component';
import { RijksProvider } from './application/providers/rijks/rijks-provider';
import { MuseumProvider } from "./core/providers/museum-provider";
import { ArtworkDetailsComponent } from './presentation/views/artwork-details/artwork-details.component';
import { AppRoutingModule } from './presentation/routing/routes';
import { ArtworkDetailResolver } from './application/resolvers/artwork-detail.resolver';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RijksInterceptor } from './application/providers/rijks/interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CarouselTileComponent,
    CarouselButtonComponent,
    CarouselComponent,
    HomeComponent,
    NavbarComponent,
    AppFooterComponent,
    ArtworkDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ 
    MuseumService, 
    ArtworkDetailResolver,
    { provide: MuseumProvider, useClass: RijksProvider, multi: true } ,
    { provide: HTTP_INTERCEPTORS, useClass: RijksInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
