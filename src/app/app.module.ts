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
// test
@NgModule({
  declarations: [
    AppComponent,
    CarouselTileComponent,
    CarouselButtonComponent,
    CarouselComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [ MuseumService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
