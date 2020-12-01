function addNode(branch, paths, root){
    //find the node at which to add the branch as a child
    let id = branch.data.id;
    let path = paths[id];
    let pathLen = path.length;
    let rootParent = root;
    path.forEach((entry, pos) => {
        let rootChild = rootParent.children[entry];
        rootParent = rootChild;
        if(pos == (pathLen - 1)){
            rootParent[id] = branch;
            return
        }
    });
    return root;
};

export default addNode;