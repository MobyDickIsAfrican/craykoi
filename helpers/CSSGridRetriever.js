// Creates a CSS Grid from a UI Node
import compareFloats from './compareFloats.js';
import UINode from './UINode.js';

class CSSGridRetriever extends UINode{
    //logic for returning the css grid
    getGrid(){
        //return css grid templates
        let children = this.getChildren();
        let rowCols;
        if(children instanceof Array){
            if(children.length === 0){
                return null;
            };
            rowCols = this.getRowColumns(children) 
        } else{
            if(Object.keys(children).length === 0){
                return null;
            }
            rowCols = this.getRowColumns(Object.values(children));
        };
        return this.getGridTemplates(rowCols.rows, rowCols.columns);
    };
    //get set of vertical lines and set of horizontal lines, thereby creating a 2-D grid
    getRowColumns(children){
        if(!(children instanceof Array)){
            throw new TypeError("not an array")
        };
        let rows = [];
        let columns = [];
        children.forEach((child) => {
            rows.push(child.data.top);
            rows.push(child.data.top + child.data.height)
            //add vertical edges to rows
            columns.push(child.data.left);
            columns.push(child.data.left + child.data.width);
            //add horizontal edges to columns
            
        });
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
          };
        columns.sort(compareNumeric);
        rows.sort(compareNumeric);
        //create sets so every entry is unique
        let rowSet = new Set(rows);
        let columnSet = new Set(columns);
        return {rows: rowSet, columns: columnSet};
    };
    /*
    create CSS grid from x and y coordinates
    returns rowTemplate and columnTemplate which are both strings of terms separated by a space
    each term is a number that is appended by 'px'
    */ 
    getGridTemplates(rows, columns){
        function getVector(vector){
            let initialTemplate;
            let i = 0;
            let prev;
            vector.forEach((pos, valAgain) => {
                if(i > 0){
                    let dist = Math.round(pos) - Math.round(prev);
                    //initialise template
                    if(i === 1){
                        if(compareFloats(pos, prev)){
                            return
                        };
                        prev = pos;
                        i = i + 1;
                        if(initialTemplate){
                            initialTemplate = initialTemplate + " " + String(dist) + "px";
                            return
                        };
                        initialTemplate = String(dist) + "px";
                        return;
                    } else{
                        if(compareFloats(pos, prev)){
                            return
                        };
                        initialTemplate = initialTemplate + " " + String(dist) + "px";
                        prev = pos;
                        return
                    }
                } else {
                    if(pos === 0){
                        i = i +1;
                        prev = pos
                        return
                    } else{
                        initialTemplate = String(pos) + "px";
                        i = i + 1;
                        prev = pos;
                        return
                    }
                }
            });
            return initialTemplate;
        }
        let rowTemplate = getVector(rows);
        let columnTemplate= getVector(columns);
        return {gridTemplateColumns: columnTemplate, gridTemplateRows: rowTemplate}
    };
};

export default CSSGridRetriever;