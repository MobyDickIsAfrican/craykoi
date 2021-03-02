// gets left/top position of element by recursively adding the positions of the parents

function getPosition(id, uiState, type){
    let ele = uiState[id];
    if(ele.parent){
        return Math.round(Number(ele[type])) + getPosition(ele.parent, uiState, type)
    };
    return Math.round(Number(ele[type]));
};

export default getPosition;