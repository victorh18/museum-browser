import { Component, Input } from '@angular/core';
import { STATES } from './animation-helpers/animation-constants';
import { trigger } from '@angular/animations';
import { TRIGGERS } from './animation-helpers/animation-triggers';

@Component({
    selector: 'carousel',
    templateUrl: 'carousel.component.html',
    animations: [
        trigger('moveNext', TRIGGERS.moveNextNew),
        trigger('moveCurrent', TRIGGERS.moveCurrentNew),
        trigger('movePrevious', TRIGGERS.movePreviousNew)
    ],
    styleUrls: [
        'carousel.component.css'
    ]
})

export class CarouselComponent {
    @Input() imageUrls: string[] = [];

    movedNext = false;
    movedPrevious = false;

    STATES = STATES;

    currentIndex = 1;
    
    getNextAnimationState(hasMovedNext: boolean): string {
        //return hasMovedNext ? STATES.CURRENT : STATES.NEXT;
        return hasMovedNext ? STATES.OUTSIDE : STATES.NEXT
    }

    getPreviousAnimationState(hasMovedPrevious: boolean, hasMovedNext: boolean): string {
        //return hasMovedPrevious ? STATES.CURRENT : STATES.PREVIOUS;
        return hasMovedNext ? STATES.CURRENT : STATES.PREVIOUS;
    }

    getCurrentAnimationState(hasMovedNext: boolean, hasMovedPrevious: boolean): string {
        //return hasMovedNext ? STATES.PREVIOUS : (hasMovedPrevious ? STATES.NEXT : STATES.CURRENT)
        return hasMovedNext ? STATES.NEXT : STATES.CURRENT;
    }
    
    moveNext(): void {
        this.movedNext = true;
        const arrayLength = this.imageUrls.length;
            
        if (this.currentIndex === (arrayLength - 1)) {
            this.currentIndex = 0
        } else {
            this.currentIndex++;
        }
    }

    resetAnimation(): void {
        this.movedNext = false;
        this.movedPrevious = false;
    }

    movePrevious(): void {
        this.movedPrevious = true;
        setTimeout(() => {
            this.movedPrevious = false;
            if (this.currentIndex === 0) {
                this.currentIndex = this.imageUrls.length - 1
                return;
            }
    
            this.currentIndex--;
        }, 90);
    }

    getPreviousImage(current: number): string {
        const imageToReturn = current === 0 ? (this.imageUrls.length - 1) : (current - 1);
        return this.imageUrls[imageToReturn];
    }

    getNextImage(current: number): string {
        const imageToReturn = current === this.imageUrls.length - 1 ? 0 : (current + 1);
        return this.imageUrls[imageToReturn];
    }
}