class UINode{
    constructor(data, parent){
        this.data = data;
        this.parent = parent;
        this.children = {}
    }
};

export default UINode;