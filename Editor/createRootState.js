import ROOT from '../helpers/state/RootIdentifier.js';
import {GENERIC as COMP} from '../UI Elements/Containers/AllowedConstants.js';
import {GENERIC_TYPE as TYPE} from '../UI Elements/Data Constants/TypeConstants.js';

function createRootState(title){
    let id = String(new Date().getTime()) + "-" + ROOT
    let state = {
        type: TYPE,
        id: id,
        parent: null, 
        left: 0,
        top: 0,
        width: 800,
        height: 720, 
        isContainer: true,
        compatibility: COMP,
        page: title
    };
    return state;
};

export default createRootState;