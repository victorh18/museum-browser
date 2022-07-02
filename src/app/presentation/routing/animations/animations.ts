import { animate, keyframes, style   } from "@angular/animations";

export const ANIMATIONS = {
    FADER_UP: animate('300ms ease', keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
       ]))
}