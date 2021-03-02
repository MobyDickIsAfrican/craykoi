import React from 'React';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import RootContainer from '../RootContainer.js';

/* nb BN */

describe("", () => {
    let updatePosition;
    let adjust;
    let mouseDown;
    let mouseUp;
    let rootState = {
        type: 'generic-container',
        id: "root",
        parent: null,
        left: 0,
        top: 0,
        width: 720,
        height: 720, 
        isContainer: true,
        compatibility: "GENERIC"
      };
    let dummyState = {
        "root": rootState,
        1: {
            type: 'generic-container',
            id: 1,
            parent: "root",
            left: 2,
            top: 2,
            width: 20,
            height: 25, 
            isContainer: true,
            compatibility: "GENERIC"
        }
    }
    let dummyIDS = [1, "root"];
    beforeEach(() => {
        updatePosition = jest.fn((...args) => {
            return console.log(1);
        });
        adjust = jest.fn((...args) => {
            return console.log(2);
        });
        mouseDown = jest.fn((...args) => {
            return console.log(3);
        });
        mouseUp = jest.fn((...args) => {
            return console.log(4);
        });
    })
    it("renders a GenericContainer as child", () => {
        let rootWithState = mount(<RootContainer updatePosition={updatePosition} adjust={adjust}
        mouseDownn={mouseDown} mouseUp={mouseUp} uiFlatState={dummyState} ids={dummyIDS} />);
        expect(rootWithState.find("GenericContainer").length).toEqual(2);
    });
    it("renders 1 Generic Container if no UI has been added", () => {
        let rootWithState = mount(<RootContainer updatePosition={updatePosition} adjust={adjust}
        mouseDownn={mouseDown} mouseUp={mouseUp} uiFlatState={{"root": rootState}} ids={["root"]} />);
        expect(rootWithState.find("GenericContainer").length).toEqual(1);
    });
})