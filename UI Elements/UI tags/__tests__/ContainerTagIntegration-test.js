import React from 'React';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import GenericContainerTag from '../GenericContainerTag.js';

/* nb BN */
describe("ContainerTag returns a wrapped Container Element", () => {
    let ContainerTag;
    let updatePosition;
    beforeEach(() => {
        updatePosition = jest.fn((...args) => {
            return console.log('updating');
        });
        ContainerTag = (<GenericContainerTag updatePosition={updatePosition} 
            mouseDown={jest.fn()} />);
    })
    it("renders Tag with required props", () => {
        let shallowTag = shallow(ContainerTag);
        expect(shallowTag.prop("compatibility")).toBeTruthy();
        expect(shallowTag.prop("type")).toBeTruthy();
        expect(shallowTag.prop("width")).toBeTruthy();
        expect(shallowTag.prop("height")).toBeTruthy();
        expect(shallowTag.prop("isContainer")).toBeTruthy();
        expect(shallowTag.prop("src")).toBeTruthy();
        expect(shallowTag.prop("title")).toBeTruthy();
        expect(shallowTag.prop("alt")).toBeTruthy();
    });
    it("renders Container", () => {
        let mountedTag = mount(ContainerTag);
        let ContainerWrapper = mountedTag.find("Container")
        expect(ContainerWrapper.length).toEqual(1);
        expect(ContainerWrapper.prop("id")).toBe(null);
    })
})