let parentNode = {
    type: 'input-box',
    id: 1,
    parent: null,
    left: 2,
    top: 2,
    width: 20,
    height: 25, 
    isContainer: true
};

let firstNode = {
    type: 'input-box', 
    id: 2,
    parent: 1,
    left: 0,
    top: 28,
    width: 20,
    height: 20,
    isContainer: true
};

let secondNode = {
    type: 'input-box', 
    id: 3,
    parent: 1,
    left: 23,
    top: 49,
    width: 20,
    height: 20,
    isContainer: false
};

let thirdNode = {
    type: 'input-box',
    id: 4,
    parent: 1,
    left: 65,
    top: 49,
    width: 20,
    height: 20,
    isContainer: false
};

export {parentNode, firstNode, secondNode, thirdNode};