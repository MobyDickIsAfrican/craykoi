// gets the style from the ui flat state object

/* nb */

function getStyle(state){
    let style = {};
    if(state.color){
        style.color = state.color;
    };
    if(state.fontSize){
        style.fontSize = state.fontSize;
    };
    if(state.fontFamily){
        style.fontFamily = state.fontFamily;
    };
    if(state.borderColor){
        style.borderColor = state.borderColor;
    };
    if(state.borderWidth){
        style.borderWidth = `${state.borderWidth}px ${state.borderWidth}px ${state.borderWidth}px 
        ${state.borderWidth}px`;
    };
    if(state.backgroundImage){
        style.backgroundImage = state.backgroundImage;
    };
    if(state.backgroundColor){
        style.backgroundColor = state.backgroundColor;
    };
    if(state.borderRadius){
        style.borderRadius = state.borderRadius;
    };
    if(state.src){
        style.src = state.src;
    };
    if(state.borderStyle){
        style.borderStyle = state.borderStyle;
    };
    if(state.backgroundSize){
        style.backgroundSize = state.backgroundSize;
    };
    return style;
}

export default getStyle;