import {CLICKED_ID} from './ACTION_CONSTANTS.js';

function clickCreator(id){
    return {
        type: CLICKED_ID,
        payload: {
            id: id,
        },
    }
};

export {clickCreator}