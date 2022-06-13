import { style } from "@angular/animations";

export const STYLES = {
    TILE_BASE: style({
        opacity: 1,
        width: '25%'
    }),
    CURRENT_TO_NEXT: style({
        transform: 'translateX(-70%) translateY(0%)',
        width: '40%'
    }),
    CURRENT_BASE: style({
        width: '40%'
    }), 
    PREVIOUS_FROM_CURRENT: style({
        transform: 'translateX(-70%) translateY(0%)',
        width: '25%'
    }),
    NEXT_FROM_CURRENT: style({
        transform: 'translateX(70%) translateY(0%)', 
        width: '25%'
    }),
    PREVIOUS_TO_CURRENT: style({ 
        width: '40%', 
        transform: 'translateX(70%) translateY(0%)', })
};