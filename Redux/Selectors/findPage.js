
function findPage(title, state){
    const page = state.pages.find((entry) => {
        if(entry === title){
            return true;
        };
        return false;
    });
    return page;
};

export default findPage;