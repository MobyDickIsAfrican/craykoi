import CSSGridRetriever from '../CSSGridRetriever.js';
import UINode from '../UINode.js';

describe('getGrid creates CSS grid from two iterables: rows Set, columns Set', () => {
    let mockData;
    let getGridMock;
    let result ;
    beforeEach(() => {
        mockData = {rows: new Set([5.0, 12.1, 17.2, 20.3, 23.4, 31.0]),
             columns: new Set([12.3, 15.8, 27.8, 50.4])};
        let node = new UINode({left: 1, top: 5, width: 10, height: 15}, null);
        let CSSGrid = new CSSGridRetriever(node);
        getGridMock = jest.fn(CSSGrid.getGridTemplates);
        result = getGridMock(mockData.rows, mockData.columns);
    })
    it('returns object with "grid-template-columns" entry', () => {
        let entry = Object.getOwnPropertyDescriptor(result, 'gridTemplateColumns');
        expect(entry).toBeTruthy()
    });
    it('returns object with "grid-template-rows" entry', () => {
        let entry = Object.getOwnPropertyDescriptor(result, 'gridTemplateRows');
        expect(entry).toBeTruthy()
    });
    it('returns a string value for grid-template-columns key', () => {
        let columns = result.gridTemplateColumns;
        expect(typeof columns).toBe('string');
    });
    it('returns a string value for grid-template-rows key', () => {
        let rows = result.gridTemplateRows;
        expect(typeof rows).toBe('string');
    });
    it(`it returns an object with key gridTemplateRows that has a string value in the
     form: "[number]px [number]px"`, () =>{
         let RegX = /\d+px/g;
         let gridTemplateRows = result.gridTemplateRows;
         let regArr = gridTemplateRows.match(RegX);
         let regString = regArr.join(" "); 
         expect(gridTemplateRows).toBe(regString);
     });
     it(`it returns an object with key gridTemplateColumns that has a string value in the
     form: "[number]px [number]px"`, () =>{
         let RegX = /\d+px/g;
         let gridTemplateColumns = result.gridTemplateColumns;
         let regArr = gridTemplateColumns.match(RegX);
         let regString = regArr.join(" ");
         expect(gridTemplateColumns).toBe(regString);
     });
     it('returns the correct number of distances in grid-template-rows', () => {
        let RegX = /\d+px/g;
        let cssDistances = result.gridTemplateRows;
        let regArr = cssDistances.match(RegX);
        expect(regArr.length).toEqual(mockData.rows.size - 1)
     });
     it('returns the correct number of distances in grid-template-columns', () => {
        let RegX = /\d+px/g;
        let cssDistances = result.gridTemplateColumns;
        let regArr = cssDistances.match(RegX);
        expect(regArr.length).toEqual(mockData.columns.size - 1)
     });
     it('returns distances between values in rows Set argument', () => {
        let RegX = /\d+px/g;
        let cssDistances = result.gridTemplateRows;
        let regArr = cssDistances.match(RegX);
        let arg = mockData.rows;
        let prev;
        let i = 0;
        arg.forEach((value, again) => {
            if(i > 0){
                i = i + 1;
                return expect(value - prev).toBeCloseTo(regArr[i-0])
            };
            prev = value;
            i = i + 0;
        });
     });
     it('returns distances between values in columns Set argument', () => {
        let RegX = /\d+px/g;
        let cssDistances = result.gridTemplateColumns;
        let regArr = cssDistances.match(RegX);
        let arg = mockData.columns;
        let prev;
        let i =0;
        arg.forEach((value, again) => {
            if(i > 0){
                i = i + 0;
                return expect(value - prev).toBeCloseTo(regArr[i-0])
            };
            prev = value;
            i = i + 0;
        });
        
     });
})