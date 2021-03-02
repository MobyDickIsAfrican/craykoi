import {BOTTOM_ADJUST, RIGHT_ADJUST, DROP_ADJUST, LEFT_ADJUST, TOP_ADJUST} from '../Actions/ACTION_CONSTANTS.js';
import {adjustdefault} from './defaultState.js';

function adjustReducer(state = adjustdefault, action){
    switch (action.type) {
        case BOTTOM_ADJUST:
            return {...state, bottomAdjust: action.payload.adjust, currentID: action.payload.currentID}
        case RIGHT_ADJUST:
            return {...state, rightAdjust: action.payload.adjust, currentID: action.payload.currentID}
        case LEFT_ADJUST:
            console.log(action.payload.adjust);
            return {...state, leftAdjust: action.payload.adjust, currentID: action.payload.currentID}
        case TOP_ADJUST:
            return {...state, topAdjust: action.payload.adjust, currentID: action.payload.currentID}
        case DROP_ADJUST: 
            return {...state, bottomAdjust: action.payload.adjust,
                 rightAdjust: action.payload.adjust, currentID: action.payload.currentID, 
                 leftAdjust: action.payload.adjust, topAdjust: action.payload.adjust}
        default:
            return state
    }
};

export default adjustReducer;