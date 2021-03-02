import UINode from '../UINode.js';
//import AbstractNode from '../AbstractNode.js';
import {parentNode, firstNode, secondNode, thirdNode} from '../data/CSSGrid-data.js';

//jest.mock('../UINode.js');

describe('UINode stores and retieves information about a UI Component', () => {
    let children;
    let node;
    beforeEach(() => {
        children = {
            [firstNode.id]: new UINode(firstNode, parentNode.id),
            [secondNode.id]: new UINode(secondNode, parentNode.id),
            [thirdNode.id]: new UINode(thirdNode, parentNode.id)
        };
        node = new UINode(parentNode, null);
        node.getChildren = jest.fn().mockReturnValue(children);
    });
    describe('sorted', () => {
        let sortedObj;
        beforeEach(() => {
            sortedObj = node.sorted();
        });
        it('returns row array that is sorted in ascending order', () => {
            let rows = sortedObj.rows;
            let ascending = true;
            let prev;
            rows.forEach((value, i) => {
                if(i === 0){
                    prev = value.getLeft();
                    return;
                }
                else{
                    if(value.getLeft() < prev){
                        ascending = false;
                    };
                }
            });
            expect(ascending).toBeTruthy();
        });
        it('returns column array sorted in ascending order', () => {
            let cols = sortedObj.columns;
            let ascending = true;
            let prev;
            cols.forEach((value, i) => {
                if(i === 0){
                    prev = value.getTop();
                    return;
                }
                else{
                    if(value.getTop() < prev){
                        ascending = false;
                    };
                }
            });
            expect(ascending).toBeTruthy();
        });
        it('returns row array that has same length as column array', () => {
            let rows = sortedObj.rows;
            let cols = sortedObj.columns;
            expect(rows.length).toBe(cols.length);
        });
        it('returns row array that has only UINode elements as entries', () => {
            let rightClass = true;
            let rows = sortedObj.rows;
            rows.forEach((value) => {
                if(!(value instanceof UINode)){
                    rightClass = false;
                }
            });
            expect(rightClass).toBeTruthy();
        });
        it('returns column array that has only UINode elements as entries', () => {
            let rightClass = true;
            let cols = sortedObj.columns;
            cols.forEach((value) => {
                if(!(value instanceof UINode)){
                    rightClass = false;
                }
            });
            expect(rightClass).toBeTruthy();
        });
    });
})