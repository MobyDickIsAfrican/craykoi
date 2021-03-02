import {SET_BUFFER} from './ACTION_CONSTANTS.js';

function bufferCreator(id, type, width, height, isContainer, compatibility, style){
    return {
        type: SET_BUFFER,
        payload: {
            buffer: {
                id: id,
                type: type,
                left: null,
                top: null,
                width: width,
                height: height,
                isContainer: isContainer,
                compatibility: compatibility,
                ...style
            }
        }
    }
}

export {bufferCreator};