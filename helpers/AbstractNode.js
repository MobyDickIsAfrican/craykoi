
// class for storing info of tree node
class AbstractNode{
    constructor(data, parent){
        if(!(data instanceof Object)){
            throw new TypeError("data not an object");
        };
        this.data = data;
        // parent = parentID
        this.parent = parent; 
        this.children = {}
    };
    getChildren(){
        return this.children;
    };
    getData(){
        return this.data;
    };
    getParent(){
        return this.parent;
    };
    setData(data){
        if(!(data instanceof Object)){
            throw new TypeError("data not an object");
        };
        return this.data = data;
    }
};

export default AbstractNode;