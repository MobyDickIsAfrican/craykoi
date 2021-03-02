import {SET_BUFFER, ADD_UI} from '../Actions/ACTION_CONSTANTS.js';

function bufferReducer(state = {}, action){
    switch (action.type) {
        case SET_BUFFER:
            console.log(state, action);
            return {...state, ...action.payload.buffer}
        // clear buffer when ui is dropped
        case ADD_UI:
            return {};
        default:
            return state;
    }
};

export default bufferReducer;