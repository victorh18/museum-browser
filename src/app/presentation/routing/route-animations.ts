import { 
    trigger,
    transition,
    style,
    query,
    animate,
    keyframes
 } from "@angular/animations";

 export const fader =
 trigger('routeAnimations', [
   transition('* <=> *', [
     query(':enter, :leave', [
       style({
         height: '92%',
         position: 'absolute',
         left: 0,
         width: '100%',
         opacity: 0,
         transform: 'scale(0.3) translateY(30%)',
       }),
     ], { optional: true }),
     query(':enter', [
       //animate('500ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
       animate('500ms ease', keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
       ])),
     ], { optional: true })
   ]),
]);