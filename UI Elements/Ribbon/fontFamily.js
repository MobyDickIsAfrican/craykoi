import React from 'react';
/* BNnb */

const fonts = [
    "Arial, Helvetica, sans-serif",
    "'Arial Black', Arial, sans-serif",
    "Verdana, Geneva, Tahoma, sans-serif",
    "Tahoma, sans-serif",
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    "'Times New Roman', Times, serif",
    "Didot, Times New Roman, sans-serif",
    "'American TypeWriter', serif",
    "'Andalé Mono', monospace, sans-serif",
    "Courier, 'Courier New', monospace",
    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    "'Bradley Hand', cursive, sans-serif",
    "'Brush Script MT', cursive, sans-serif",
    "Luminari, cursive, sans-serif",
    "'Comic Sans', cursive, sans-serif",
];

function getFamily(){
    function getFont(item){
        let fontArr = item.split(", ");
        return fontArr[0];
    }
    const family = fonts.map((item) => {
        return (<option value={item} selected>{getFont(item)}</option>)
    });
    return family;
};
const fontFamily = getFamily();

export {fontFamily}