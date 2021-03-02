import React from 'React';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import Panel from '../Panel.js';

/* nb BN*/

describe("side-bar with UI Tags", () => {
    let PanelComp;
    beforeEach(() => {
        PanelComp = (<Panel />);
    })
    it("renders Generic/Form/Image Panels", () => {
        let mountedPanel = mount(PanelComp);
        let GenericWrapper = mountedPanel.find("GenericPanel");
        let FormWrapper = mountedPanel.find("FormPanel");
        let ImageWrapper = mountedPanel.find("ImagePanel");
        expect(GenericWrapper.length).toEqual(1);
        expect(FormWrapper.length).toEqual(1);
        expect(ImageWrapper.length).toEqual(1);
    })
})