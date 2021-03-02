// function retrieves the ui objects that are in the desired page

function getPage(title, state){
    let dummyState = {...state};
    let pageUI = Object.values(dummyState.ui.byID);
    let filteredState = {};
    for(let ui of pageUI){
        if(ui.page === title){
            let data = {[ui.id]: ui};
            filteredState = {...filteredState, ...data}
        }
    };
    return filteredState;
};

export default getPage;