// compares two floats
function compareFloats(current, previous){
    let difference = Math.round(current) - Math.round(previous);
    if(difference < 0){difference = difference*-1};
    if(difference < 1){
        return true;
    };
    return false; 
};

export default compareFloats;