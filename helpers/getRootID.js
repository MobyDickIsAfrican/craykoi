// function that retrieves an id with a strucure in the form : 'root-126349w3' from an object
import ROOT from './state/RootIdentifier.js';

function getRootID(state){
    let root = Object.keys(state).find((key) => {
        let type = key.split("-")[1];
        if(type === ROOT){
            return true
        }
    });
    return root;
};

export default getRootID;