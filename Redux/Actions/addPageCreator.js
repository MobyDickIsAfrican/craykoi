import {ADD_PAGE} from '../Actions/ACTION_CONSTANTS.js';

function addPageCreator(title){
    return {
        type: ADD_PAGE, 
        payload: {title: title}
    }
};


export {addPageCreator}