//newNode = UINode
function createTree(ids, obj, newNode, paths, root){
    //store ids of components as keys, and an array of ids as its path
    let paths = {};
    ids.forEach((id) =>{
        let ele = obj[id];
        let branch = getBranch(ele, null, newNode, obj);
        let pathObj = getPaths(branch, paths);
        addNode(branch, pathObj, root);
        return
    });
    return root;
}

export default createTree;