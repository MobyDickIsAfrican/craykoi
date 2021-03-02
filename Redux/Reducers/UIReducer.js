// reducer for the entire ui
import {ADD_UI} from '../Actions/ACTION_CONSTANTS.js';
import isRoot from '../../helpers/state/isRoot.js';

function addPage(state = [], action){
    switch (action.type) {
        case ADD_UI:
            if(isRoot(action.payload.id)){
                const pages = state.map((page) => page);
                pages.push(action.payload.page);
                return pages;
            };
            return state;
        default:
            return state
    }
};

export default addPage;