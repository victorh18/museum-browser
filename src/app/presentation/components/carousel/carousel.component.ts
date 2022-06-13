import { Component, Input } from '@angular/core';
import { STATES } from './animation-helpers/animation-constants';
import { trigger } from '@angular/animations';
import { TRIGGERS } from './animation-helpers/animation-triggers';

@Component({
    selector: 'carousel',
    templateUrl: 'carousel.component.html',
    animations: [
        trigger('moveNext', TRIGGERS.moveNext),
        trigger('moveCurrent', TRIGGERS.moveCurrent),
        trigger('movePrevious', TRIGGERS.movePrevious)
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
    
    getNextTileAnimationState(hasMovedNext: boolean): string {
        return hasMovedNext ? STATES.CURRENT : STATES.NEXT;
    }

    getPreviousAnimationState(hasMovedPrevious: boolean): string {
        return hasMovedPrevious ? STATES.CURRENT : STATES.PREVIOUS;
    }

    getCurrentAnimationState(hasMovedNext: boolean, hasMovedPrevious: boolean): string {
        return hasMovedNext ? STATES.PREVIOUS : (hasMovedPrevious ? STATES.NEXT : STATES.CURRENT)
    }
    
    moveNext(): void {
        this.movedNext = true;
        setTimeout(() => {
            this.movedNext = false;

            const arrayLength = this.imageUrls.length;
            if (this.currentIndex === (arrayLength - 1)) {
                this.currentIndex = 0
                return;
            }

            this.currentIndex++;
        }, 90);
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