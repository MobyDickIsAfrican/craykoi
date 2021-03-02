// checks to see if id is of the "root" format
import ROOT from './RootIdentifier.js';

function isRoot(id){
    let identifier = id.split("-")[1];
    if(identifier === ROOT){
        return true;
    };
    return false;
}

export default isRoot;