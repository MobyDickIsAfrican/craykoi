// reducer for the entire ui
import {ADD_UI, LOAD_UI} from '../Actions/ACTION_CONSTANTS.js';
import isRoot from '../../helpers/state/isRoot.js';
import {getPages} from './createUIHelper.js';

function addPage(state = [], action){
    switch (action.type) {
        case ADD_UI:
            if(isRoot(action.payload.id)){
                const pages = state.map((page) => page);
                pages.push(action.payload.page);
                return pages;
            };
            return state;
        case LOAD_UI:
            console.log(getPages(action.payload));
            return [...getPages(action.payload)]
        default:
            return state
    }
};

export default addPage;