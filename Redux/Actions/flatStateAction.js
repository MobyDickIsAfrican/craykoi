import {ADD_UI, UPDATE_UI, LOAD_UI} from './ACTION_CONSTANTS.js';

function addUICreator(data){
    return {
        type: ADD_UI,
        payload: {...data}
    }
};

function updateUICreator(data){
    return {
        type: UPDATE_UI,
        payload: {...data}
    }
};

function loadUICreator(data){
    return {
        type: LOAD_UI,
        payload: data
    }
}

export {addUICreator, updateUICreator, loadUICreator}