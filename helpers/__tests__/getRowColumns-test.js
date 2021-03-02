import CSSGridRetriever from '../CSSGridRetriever.js';
import UINode from '../UINode.js';

import {uniqueData, duplicatedRows, duplicatedColumns} from '../rowColumnsData.js';

describe("getRowColumns returns object of vertical lines and horizontal lines that represent a 2-d grid", () =>{
    let getRowsandColumnsMock;
    beforeEach(() => {
        let node = new UINode({left: 1, top: 5, width: 10, height: 15}, null);
        let CSSGrid =  new CSSGridRetriever(node);
        getRowsandColumnsMock = jest.fn(CSSGrid.getRowColumns);
    })
    it('returns row of same length as input row if all row inputs are unique', () =>{
        let result = getRowsandColumnsMock(uniqueData);
        expect(result.rows.size).toBe(6);
    });
    it('returns a column of same length as input row if all row inputs are unique', () =>{
        let result = getRowsandColumnsMock(uniqueData);
        expect(result.columns.size).toBe(6);
    });
    it('returns a row set of length row-arg-length - number of duplicated values', () => {
        let result = getRowsandColumnsMock(duplicatedRows);
        expect(result.rows.size).toBe(4);
    });
    it('returns a column set of length row-arg-length - number of duplicated values', () => {
        let result = getRowsandColumnsMock(duplicatedColumns);
        expect(result.columns.size).toBe(4);
    });
    it('returns an object with key "rows"', () =>{
        let result = getRowsandColumnsMock(uniqueData);
        let key = Object.getOwnPropertyDescriptor(result, 'rows');
        expect(key).toBeTruthy()
    });
    it('returns an object with key columns', () => {
        let result = getRowsandColumnsMock(uniqueData);
        let key = Object.getOwnPropertyDescriptor(result, 'columns');
        expect(key).toBeTruthy()
    });
    it('returns an object with with key: rows, value: set', () => {
        let result = getRowsandColumnsMock(uniqueData);
        expect((result.rows instanceof Set)).toBeTruthy();
    });
    it('returns an object with with key: columns, value: set', () => {
        let result = getRowsandColumnsMock(uniqueData);
        expect((result.columns instanceof Set)).toBeTruthy();
    });
    it('throws a TypeError if argument is not n array', () => {
        expect(() => {getRowsandColumnsMock(undefined)}).toThrow(TypeError);
    });
    it('returns an sorted columns Set in ascending order', () => {
        let columns = getRowsandColumnsMock(uniqueData).columns;
        let prev = 0;
        columns.forEach((value, i) => {
            if(i > 0){
                expect(value).toBeGreaterThan(prev);
            };
            prev = value; 
        });
    });
    it('returns an sorted row Set in ascending order', () => {
        let rows = getRowsandColumnsMock(uniqueData).rows;
        let prev = 0;
        rows.forEach((value, i) => {
            if(i > 0){
                expect(value).toBeGreaterThan(prev);
            };
            prev = value;
        });
    });
})