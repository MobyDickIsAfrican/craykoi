//return single branch of tree (no side branches)
//ele is obj array, child is a UINode, construct is constructor for UINode
function getBranch(ele, child, construct, obj){
    let parentID = ele.parentID;
    if(parentID){
        //get parent element from obj
        let parentEle = obj[ele.id];
        //create child UINode for element (with no children)
        if(!child){
        let newChild = construct(ele, parentID);
        //if parentID is in paths the parent element has already been added to node
        if(paths[parentID]){
            return newChild;
        }
        return getBranch(parentEle, newChild)
        } else{
            let newParent = construct(ele, parentID);
            newParent.children[ele.id] = child;
            if(paths[parentID]){
                return newParent;
            }
            return getBranch(parentEle, newParent)
        }
    } else{
    let newParent = construct(ele, parentID);
    newParent.children[ele.id] = child;
    return newParent;
    }
};

export default getBranch;