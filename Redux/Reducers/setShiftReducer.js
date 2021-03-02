import {SET_SHIFT} from '../Actions/ACTION_CONSTANTS.js';
import {shiftDefault} from './defaultState.js';

function setShiftReducer(state = shiftDefault, action){
    switch (action.type) {
        case SET_SHIFT:
            return {
                ...state, 
                currentShiftX: action.payload.currentShiftX,
                currentShiftY: action.payload.currentShiftY,
            } 
        default:
            return state;
    }
};

export default setShiftReducer;