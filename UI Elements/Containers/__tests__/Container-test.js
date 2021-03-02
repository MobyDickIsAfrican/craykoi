import React from 'React';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()}); 
import Container from '../Container.js';

/* nb BN */

describe("renders ui container", () => {
    let containerID = 1;
    let updatePosition;
    beforeEach(() => {
        updatePosition = jest.fn();
    })
    it(`onDragEnter calls compatibilityCheck and sets  state to true if
     compatibility prop is true`, () => {
         let allowed = "FORM";
         let dataTransfer = {getData: jest.fn((str) => {
             return "FORM";
         })};
         let container = mount(<Container id={containerID} updatePosition={updatePosition}
            allowed={allowed} />);
        container.simulate("dragenter", {dataTransfer: dataTransfer});
        expect(dataTransfer.getData).toHaveBeenCalled();
        expect(container.state("droppable")).toBeTruthy();
     });
})