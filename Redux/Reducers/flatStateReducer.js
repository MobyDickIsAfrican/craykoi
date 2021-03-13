//import {defaultState} from './defaultState.js';
import {ADD_UI, UPDATE_UI, LOAD_UI} from '../Actions/ACTION_CONSTANTS.js';
import {normalize} from './createUIHelper.js';

function flatStateReducer(state = {}, action){
    let data;
    switch (action.type) {
        case ADD_UI:
            data = {
                [action.payload.id]: {
                    ...action.payload
                }
            };
            return {...state, ...data}
        case UPDATE_UI:
            data = {
                [action.payload.id]: {
                    ...action.payload
                }
            };
            return {...state, ...data} 
        case LOAD_UI:
            return {...state, ...normalize(action.payload)}
        default:
            return state;
    }
};

export default flatStateReducer;