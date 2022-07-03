import { 
    trigger,
    transition,
    query,
 } from "@angular/animations";
import { FaderTransitions } from "./animations";
import { ANIMATIONS } from "./animations/animations";
import { STYLES } from "./animations/styles";

export const fader =
  trigger('routeAnimations', [
   transition(FaderTransitions.join(','), [
     query(':enter, :leave', [ STYLES.SCREENBASE, ], { optional: true }),
     query(':enter', [ ANIMATIONS.FADER_UP ], { optional: true })
   ]),
]);