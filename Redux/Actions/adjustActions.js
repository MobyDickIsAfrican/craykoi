import {DROP_ADJUST, RIGHT_ADJUST, BOTTOM_ADJUST, LEFT_ADJUST, TOP_ADJUST} from './ACTION_CONSTANTS.js';

function rightAdjustCreator(id){
    if(id === "root"){
        return {}
    };
    return {
        type: RIGHT_ADJUST,
        payload: {adjust: true, currentID: id}
    }
};

function bottomAdjustCreator(id){
    return {
        type: BOTTOM_ADJUST,
        payload: {adjust: true, currentID: id}
    }
};

function dropAdjustCreator(){
    return {
        type: DROP_ADJUST,
        payload: {
            adjust: false,
            currentID: null
        }
    }
};

function leftAdjustCreator(id){
    console.log(id);
    return {
        type: LEFT_ADJUST,
        payload: {adjust: true, currentID: id}
    }
};

function topAdjustCreator(id){
    return {
        type: TOP_ADJUST,
        payload: {adjust: true, currentID: id}
    }
}

export {rightAdjustCreator, bottomAdjustCreator, dropAdjustCreator, leftAdjustCreator, topAdjustCreator}