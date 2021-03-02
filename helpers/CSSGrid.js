/*
class for determining the css-grid properties of a UINode's children
*/
import compareFloats from './compareFloats.js';
import CSSGridRetriever from './CSSGridRetriever.js';
 
class CSSGrid extends CSSGridRetriever{
    //returns an array
    getGridList(){
        let sorted = this.getSorted();
        let locations =  this.locate(sorted, this.getGrid());
        if(!locations){
            return null;
        }
        return locations.entries();
    };
    getSorted(){
        return this.sorted();
    }
    // sorts children of Grid
    /*
    strategy is to loop through the grid templates and add the entries until the sum equals
    the nodes position and coordinates of the adjacent side
    */
   locate(sorted, gridTemplate){
    if(!sorted || !gridTemplate){
        console.log('makes sense');
        return null;
    };
    let RegX = /\d+/g;
    let rows = sorted.rows;
    let columns = sorted.columns;
    // stores the nodes with keys as nodes and the columnStart and rowStart as values
    let locations = new Map();
    for(let entry of rows){
        let gridTemplateRow = gridTemplate.gridTemplateRows.match(RegX);
        inner(entry, entry.getTop(), entry.getHeight(), gridTemplateRow,
        locations, 'gridRowStart', 'gridRowEnd');
    };
    for(let entry of columns){
        let gridTemplateColumn = gridTemplate.gridTemplateColumns.match(RegX);
        inner(entry, entry.getLeft(), entry.getWidth(), gridTemplateColumn,
        locations, 'gridColumnStart', 'gridColumnEnd');
    }
    function inner(entry, pos, length, template, map, gridStart, gridEnd){
    let start = null;
    if(Math.floor(pos) === 0 || Math.round(pos) === 0){
        start = 1;
    }
    let j = 0;
    let sum = 0;
    let end;
    for(let dist of template){
        sum = sum + Number(dist);
        // start is unknown, typically when pos !== 0
        if(!start){
            if(compareFloats(sum, Number(pos))){
                start = j + 2;
            };
        };
        if(compareFloats(sum, Number(pos) + Number(length))){
                end = j + 2;
            };
            j = j + 1;
        };
        if(map.has(entry)){
            let style = map.get(entry);
            style[gridStart] = start;
            style[gridEnd] = end;
        } else{
            map.set(entry, {[gridStart]: start, [gridEnd]: end})
        }
        return map;
    };
    return locations;
    }
};

export default CSSGrid;