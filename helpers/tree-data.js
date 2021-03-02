
let threeChildren = { 
    1: {
    type: 'input-box', //'input-box'
    id: 1,
    parentID: null,
    left: 25,
    top: 35,
    width: 100,
    height: 50,
    hasText: false,
    text: null }, 
    2: {
        type: 'input-box', //'input-box'
        id: 2,
        parentID: 1,
        left: 25,
        top: 35,
        width: 100,
        height: 50,
        hasText: false,
        text: null },
    3: {
        type: 'input-box', //'input-box'
        id: 3,
        parentID: 1,
        left: 25,
        top: 35,
        width: 100,
        height: 50,
        hasText: false,
        text: null }
};

let ids = Object.keys(threeChildren);

let oneChild = {
    1: {
        type: 'input-box', //'input-box'
        id: 1,
        parentID: null,
        left: 25,
        top: 35,
        width: 100,
        height: 50,
        hasText: false,
        text: null }, 
};
let oneID = [1,]

export {threeChildren, ids, oneChild, oneID}