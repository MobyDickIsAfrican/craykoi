
let parentNode = {
    id: 1,
    parent: null,
    left: 2,
    top: 2,
    width: 20,
    height: 25
};

let firstNode = {
    id: 2,
    parent: 1,
    left: 23,
    top: 28,
    width: 20,
    height: 20
};

let secondNode = {
    id: 3,
    parent: 1,
    left: 23,
    top: 49,
    width: 20,
    height: 20
};

let thirdNode = {
    id: 4,
    parent: 1,
    left: 65,
    top: 49,
    width: 20,
    height: 20
};

/*
let firstNode = {
    id: 2,
    parent: 1,
    left: 44,
    top: 28,
    width: 20,
    height: 20
};

let secondNode = {
    id: 3,
    parent: 1,
    left: 23,
    top: 70,
    width: 20,
    height: 20
};

let thirdNode = {
    id: 4,
    parent: 1,
    left: 65,
    top: 49,
    width: 20,
    height: 20
};

let first = new UINode(firstNode, null);
        first.getLeft.mockReturnValue(44);
        first.getWidth.mockReturnValue(20);
        first.getTop.mockReturnValue(28);
        first.getHeight.mockReturnValue(20);
        let second =new UINode(secondNode, null);
        second.getLeft.mockReturnValue(23);
        second.getWidth.mockReturnValue(20);
        second.getHeight.mockReturnValue(20);
        second.getTop.mockReturnValue(70);
        let third = new UINode(thirdNode, null);
        third.getLeft.mockReturnValue(65);
        third.getWidth.mockReturnValue(20);
        third.getTop.mockReturnValue(49);
        third.getHeight.mockReturnValue(20);
*/

export {parentNode, firstNode, secondNode, thirdNode};