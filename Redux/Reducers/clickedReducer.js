import {CLICKED_ID} from '../Actions/ACTION_CONSTANTS.js';

function clickedReducer(state = null, action){
    switch (action.type) {
        case CLICKED_ID:
            return action.payload.id;
        default:
            return state;
    }
};

export default clickedReducer;