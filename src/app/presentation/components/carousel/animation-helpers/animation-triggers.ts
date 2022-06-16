import { animate, state, transition } from "@angular/animations"
import { STATES } from "./animation-constants"
import { STYLES } from "./animation-styles"
import { TRANSITIONS } from "./animation-transitions"

export const ANIMATIONS = {
    NEXT_TO_CURRENT: animate('100ms')
}

export const TRIGGERS = {
    moveCurrentNew: [
        state(STATES.CURRENT, STYLES.CURRENT_BASE),
        state(STATES.NEXT, STYLES.NEXT_FROM_CURRENT),
        state(STATES.PREVIOUS, STYLES.PREVIOUS_FROM_CURRENT),
        transition(TRANSITIONS.CURRENT_TO_NEXT, [  ]),
        transition(TRANSITIONS.NEXT_TO_CURRENT, [ ANIMATIONS. NEXT_TO_CURRENT ]),
        transition(TRANSITIONS.CURRENT_TO_PREVIOUS, []),
        transition(TRANSITIONS.PREVIOUS_TO_CURRENT, [ ANIMATIONS.NEXT_TO_CURRENT])
    ],
    moveNextNew: [
        state(STATES.NEXT, STYLES.TILE_BASE),
        state(STATES.OUTSIDE, STYLES.OUTSIDE_NEXT),
        state(STATES.CURRENT, STYLES.NEXT_TO_CURRENT),
        transition(TRANSITIONS.NEXT_TO_OUTSIDE, [ ]),
        transition(TRANSITIONS.OUTSIDE_TO_NEXT, [ ANIMATIONS.NEXT_TO_CURRENT]),
        transition(TRANSITIONS.CURRENT_TO_NEXT, [ ANIMATIONS.NEXT_TO_CURRENT])
    ],
    movePreviousNew: [
        state(STATES.PREVIOUS, STYLES.TILE_BASE),
        state(STATES.CURRENT, STYLES.PREVIOUS_TO_CURRENT),
        state(STATES.OUTSIDE, STYLES.OUTSIDE_PREVIOUS),
        transition(TRANSITIONS.PREVIOUS_TO_CURRENT, []),
        transition(TRANSITIONS.CURRENT_TO_PREVIOUS, [ ANIMATIONS.NEXT_TO_CURRENT]),
        transition(TRANSITIONS.OUTSIDE_TO_PREVIOUS, [ ANIMATIONS.NEXT_TO_CURRENT])
    ],
}