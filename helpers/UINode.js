import AbstractNode from './AbstractNode.js';

// This class is for storing and retrieving information about a UI component
class UINode extends AbstractNode{
    getID(){
        return this.getData().id;
    };
    isContainer(){
        return this.getData().isContainer;
    };
    getLeft(){
        return this.getData().left
    };
    getTop(){
        return this.getData().top
    };
    getWidth(){
        return this.getData().width;
    };
    getHeight(){
        return this.getData().height;
    }; 
    addNode(node){
        if(node instanceof UINode){
            if(this.children[node.getID()]){
                throw new Error("already exists");
            };
            this.children[node.getID()] = node;
            return this;
        }
    };
    sorted(){
        let children = Object.values(this.getChildren());
        if(children.length === 0){
            return null;
        }
        let rows = [];
        let columns = [];
        children.forEach((child) => {
            rows.push(child);
            columns.push(child);
        });
        rows.sort(compareWrapper('top'));
        columns.sort(compareWrapper('left'));
        function compareWrapper(attr){
            function compare(firstChild, secondChild){
                if(firstChild.getData()[attr] > secondChild.getData()[attr]){
                    return 1;
                };
                if(firstChild.getData()[attr] < secondChild.getData()[attr]){
                    return -1;
                };
                if(firstChild.getData()[attr] == secondChild.getData()[attr]){
                    return 0;
                };
            };
            return compare;
        };
        return {rows, columns};
    };
};

export default UINode;