import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STATES } from './animation-helpers/animation-constants';
import { trigger } from '@angular/animations';
import { TRIGGERS } from './animation-helpers/animation-triggers';
import { Image } from '../../../core/entities/image-data';

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
    @Input() images: Image[] = [];
    @Output() onClickCurrent = new EventEmitter();

    movedNext = false;
    movedPrevious = false;

    STATES = STATES;

    currentIndex = 1;
    
    getNextAnimationState(hasMovedNext: boolean, hasMovedPrevious: boolean): string {
        return hasMovedNext ? STATES.OUTSIDE : hasMovedPrevious ? STATES.CURRENT : STATES.NEXT
    }

    getPreviousAnimationState(hasMovedNext: boolean, hasMovedPrevious: boolean): string {
        return hasMovedNext ? STATES.CURRENT : hasMovedPrevious ? STATES.OUTSIDE : STATES.PREVIOUS;
    }

    getCurrentAnimationState(hasMovedNext: boolean, hasMovedPrevious: boolean): string {
        return hasMovedNext ? STATES.NEXT : hasMovedPrevious ? STATES.PREVIOUS : STATES.CURRENT;
    }
    
    moveNext(): void {
        this.movedNext = true;
        const arrayLength = this.images.length;
            
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

        if (this.currentIndex === 0) {
            this.currentIndex = this.images.length - 1
            return;
        }

        this.currentIndex--;
    }

    getPreviousImage(current: number): string {
        const imageToReturn = current === 0 ? (this.images.length - 1) : (current - 1);
        return this.images[imageToReturn]?.imageUrl ?? '';
    }

    getNextImage(current: number): string {
        const imageToReturn = current === this.images.length - 1 ? 0 : (current + 1);
        return this.images[imageToReturn]?.imageUrl ?? '';
    }

    clickOnCurrent(): void {
        this.onClickCurrent.emit(this.images[this.currentIndex]);
    }
}