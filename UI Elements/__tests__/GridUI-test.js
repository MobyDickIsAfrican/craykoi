import React from 'React';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()}); 
import {parentNode, firstNode, secondNode, thirdNode} from '../test-data/GridUI-test.js';
import CSSGrid from '../../helpers/CSSGrid.js';
import GridUI from '../GridUI.js';
import CompWrapper from '../CompWrapper.js';
jest.mock('../../helpers/CSSGrid.js');
/* bn */

describe('GridUI renders children of parent container', () => {
    let node;
    beforeEach(() => {
        let first = new CSSGrid(firstNode, null);
        first.getData.mockReturnValue(firstNode);
        first.isContainer.mockReturnValue(true);
        first.getID.mockReturnValue(2);
        let second =new CSSGrid(secondNode, null);
        second.getData.mockReturnValue(secondNode);
        second.isContainer.mockReturnValue(false);
        second.getID.mockReturnValue(3);
        let third = new CSSGrid(thirdNode, null);
        third.getData.mockReturnValue(thirdNode);
        third.isContainer.mockReturnValue(false);
        third.getID.mockReturnValue(4);
        node = new CSSGrid(parentNode);
        node.getData.mockReturnValue(parentNode);
        node.getGrid.mockReturnValue({gridTemplateRows: '23px 20px 22px 20px', 
        gridTemplateColumns: '28px 20px 1px 20px'});//[first, {gridRowStart: 1}
        let map = new Map ([
            [first, {
                gridRowStart: 1,
                gridRowEnd: 2,
                gridColumnStart: 2,
                gridColumnEnd: 3,  
            }],
            [second, {
                gridRowStart: 3,
                gridRowEnd: 4,
                gridColumnStart: 4,
                gridColumnEnd: 5,  
            }],
            [third, {
                gridRowStart: 5,
                gridRowEnd: 6,
                gridColumnStart: 4,
                gridColumnEnd: 5,  
            }]
        ]);
        node.getGridList.mockReturnValue(map.entries());
    })
    it('returns a CompWrapper', () => {
        let grid = shallow(<GridUI node={node} />);
        expect(grid.find('CompWrapper').length).toBe(1);
    });
    it('passes data Object prop to CompWrapper', () => {
        let grid = shallow(<GridUI node={node} />);
        let data = grid.prop('data');
        expect(data instanceof Object).toBeTruthy();
    });
    it('passes style Object to CompWrapper', () => {
        let grid = shallow(<GridUI node={node} />);
        let style = grid.prop('style');
        expect(style instanceof Object).toBeTruthy();
    });
    it('renders a ul tag with number of children equal to number of children of node', () => {
        let grid = mount(<GridUI node={node} />);
        let compWrapper = grid.find('CompWrapper');
        let wrapperProp = compWrapper.prop('ui');
        let mountedGrid = mount(wrapperProp);
        let ulChildren = mountedGrid.find('BuiltInUI').prop('children');
        let ul = mount(ulChildren);
        expect(ul.children().length).toEqual(3);
    }); 
    it('number of GridUI li tags is equal to number of node children that are containers', () => {})
})