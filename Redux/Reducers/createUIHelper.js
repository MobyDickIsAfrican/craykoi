
function normalize(arr){
    let state = {};
    for(let entry of arr){
        state[entry.id] = entry
    };
    return state;
};

function getPages(arr){
    let pageSet = new Set();
    for(let entry of arr){
        pageSet.add(entry.page)
    };
    return pageSet.keys();
}

export {normalize, getPages};