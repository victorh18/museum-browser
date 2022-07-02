import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import packageJson  from "../../package.json";
import { fader } from './presentation/routing/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader
  ]
})
export class AppComponent {
  title = 'museum-browser';
  public version: string = packageJson.version;

  prepareRoute(outlet: RouterOutlet) {
    const value = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    console.log(value);
    
    return value;
  }
}
