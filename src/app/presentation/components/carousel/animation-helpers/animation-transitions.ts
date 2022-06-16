import { STATES } from "./animation-constants";

export const TRANSITIONS = {
    NEXT_TO_CURRENT: `${STATES.NEXT} => ${STATES.CURRENT}`,
    CURRENT_TO_NEXT: `${STATES.CURRENT} => ${STATES.NEXT}`,
    PREVIOUS_TO_CURRENT: `${STATES.PREVIOUS} => ${STATES.CURRENT}`,
    CURRENT_TO_PREVIOUS: `${STATES.CURRENT} => ${STATES.PREVIOUS}`,
    NEXT_TO_OUTSIDE: `${STATES.NEXT} => ${STATES.OUTSIDE}`,
    OUTSIDE_TO_NEXT: `${STATES.OUTSIDE} => ${STATES.NEXT}`
}