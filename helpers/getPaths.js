function getPaths(branch, paths){
    let parentID = branch.parent;
    let parentPath = paths[parentID];
    let nodeID = branch.data.id;
    //path of current node is the path of the parent node + the parent node's id
    paths[nodeID] = parentPath + [parentID];
    if(branch.children){
        let childValue = Object.values(branch.children);
        //a branch always has one child
        let childBranch = childValue[0];
        return getPaths(childBranch, paths);
    } else{
        return paths;
    }
};

export default getPaths;