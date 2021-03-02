import getRootID from './getRootID';
const { default: CSSGrid } = require("./CSSGrid");

class Tree{
    constructor(uiFlatState){
        let rootID = getRootID(uiFlatState);
        this.root = new CSSGrid({...uiFlatState[rootID]}, null);
        this.state = {uiFlatState};
    };
    getTree(){ 
        return this.root;
    }
    createTree(){
        let family = this.getFamily();
        let familyTree = this.orphansFindParents(family);
        this.root = familyTree[this.root.getID()];
        return this.getTree();
    };
    //adds state object entries to family members and keep tracks of the orphans
    getFamily(){
        let rootID = this.root.getID()
        let members = {[rootID]: this.root};
        let orphans = [];
        let uiArrray = Object.values(this.state.uiFlatState);
        uiArrray.forEach((data) => {
            if(data.id === rootID){
                return;
            }
            let node = new CSSGrid(data, data.parent);
            if(members[data.parent]){
                members[data.parent].addNode(node);
                members[data.id] = node;
                return
            } else if(!data.parent){
                members.root.addNode(node);
                members[data.id] = node;
                return
            } else{
                members[data.id] = node;
                orphans.push(node);
                return
            }
        });
        return {members, orphans};
    };
    orphansFindParents(family){
        let orphans = family.orphans;
        let members = family.members;
        orphans.forEach((orphan) => {
            let parent = members[orphan.getParent()];
            parent.addNode(orphan);
        });
        return members;
    };
}

export default Tree;