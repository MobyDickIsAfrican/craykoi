import CSSGrid from '../CSSGrid.js';
import UINode from '../UINode.js';
jest.mock('../UINode.js');
import {parentNode, firstNode, secondNode, thirdNode} from '../data/CSSGrid-data.js';

describe('GridLocater determines the css-grid properties of a UINodes children', () =>{
    let node;
    let gridTemplates;
    let rowArr;
    let colArr;
    beforeEach(() => {
        let first = new CSSGrid(firstNode, null);
        first.getLeft.mockReturnValue(0);
        first.getWidth.mockReturnValue(20);
        first.getTop.mockReturnValue(28);
        first.getHeight.mockReturnValue(20);
        let second =new CSSGrid(secondNode, null);
        second.getLeft = jest.fn().mockReturnValue(23);
        second.getWidth = jest.fn().mockReturnValue(20);
        second.getHeight = jest.fn().mockReturnValue(20);
        second.getTop = jest.fn().mockReturnValue(49);
        let third = new CSSGrid(thirdNode, null);
        third.getLeft = jest.fn().mockReturnValue(65);
        third.getWidth = jest.fn().mockReturnValue(20);
        third.getTop = jest.fn().mockReturnValue(49);
        third.getHeight = jest.fn().mockReturnValue(20);
        rowArr = [first, second, third];
        colArr = [first, third, second];
        node = new CSSGrid(parentNode, null);
        node.getSorted = jest.fn().mockReturnValue({rows: rowArr, columns: colArr});
        gridTemplates = {gridTemplateRows: '20px 3px 20px 22px 20px', 
        gridTemplateColumns: '28px 20px 1px 20px'} 
    });
    describe('locate', () => {
        it('returns Map with same length as sorted array of UINodes', () => {
            expect(node.locate(node.getSorted(), gridTemplates).size).toBe(rowArr.length);
        });
        it('returns map where keys are instances of UINode', () => {
            let nodes = node.locate(node.getSorted(), gridTemplates).keys();
            let allNodes = true;
            for(let key of nodes){
                if(!(key instanceof UINode)){
                    allNodes = false;
                }
            };
            expect(allNodes).toBeTruthy();
        });
        it('returns map where values are objects with gridRowStart', () => {
            let sorted = node.getSorted();
            let nodes = node.locate(sorted, gridTemplates).values();
            let allNodes = true;
            for(let value of nodes){
                let property = Object.getOwnPropertyDescriptor(value, 'gridRowStart');
                if(!property.value){
                    allNodes = false;
                };
            };
            expect(allNodes).toBeTruthy();
        });
        it('returns map where values are objects with gridRowEnd', () => {
            let nodes = node.locate(node.getSorted(), gridTemplates).values();
            let allNodes = true;
            for(let value of nodes){
                let property = Object.getOwnPropertyDescriptor(value, 'gridRowEnd');
                if(!property.value){
                    allNodes = false;
                };
            };
            expect(allNodes).toBeTruthy();
        });
        it('returns map where values are objects with gridColumnStart', () => {
            let nodes = node.locate(node.getSorted(), gridTemplates).values();
            let allNodes = true;
            for(let value of nodes){
                let property = Object.getOwnPropertyDescriptor(value, 'gridColumnStart');
                if(!property.value){
                    allNodes = false;
                };
            };
            expect(allNodes).toBeTruthy();
        });
        it('returns map where values are objects with gridColumnEnd', () => {
            let nodes = node.locate(node.getSorted(), gridTemplates).values();
            let allNodes = true;
            for(let value of nodes){
                let property = Object.getOwnPropertyDescriptor(value, 'gridColumnEnd');
                if(!property.value){
                    allNodes = false;
                };
            };
            expect(allNodes).toBeTruthy();
        });
        it('each object has unique combo of gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd', () => {
            let nodes = node.locate(node.getSorted(), gridTemplates).values();
            let comboSet = new Set();
            for(let style of nodes){
                let combo = Object.values(style).join("");
                comboSet.add(combo);
            };
            expect(comboSet.size).toBe(rowArr.length);
        });
        it('returns null if sorted arrays are empty', () => {
            let nodes = node.locate(null, null);
            expect(nodes).toBeFalsy();

        });
    })
})