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
// test
@NgModule({
  declarations: [
    AppComponent,
    CarouselTileComponent,
    CarouselButtonComponent,
    CarouselComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [ MuseumService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
