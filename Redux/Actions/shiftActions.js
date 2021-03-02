import {SET_SHIFT} from './ACTION_CONSTANTS.js';

function shiftCreator(x, y){
    return {
        type: SET_SHIFT,
        payload: {
            currentShiftX: x,
            currentShiftY: y,
        }
    }
}

export {shiftCreator};