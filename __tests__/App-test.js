import React from 'React';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()}); 
import App from '../App.js';
import {GENERIC} from '../UI Elements/Containers/AllowedConstants.js';
/* BNnb */

describe("renders the panel and root container", () => {
    let app;
    let setBuffer;
    let updatePosition;
    let updateDim;
    let mouseUp;
    beforeEach(() => {
        setBuffer = jest.spyOn(App.prototype, "setBuffer");
        updatePosition = jest.spyOn(App.prototype, "updatePosition");
        updateDim = jest.spyOn(App.prototype, "updateDim");
        mouseUp = jest.spyOn(App.prototype, "mouseUp");
        app = mount(<App />);
    });
    afterEach(() =>{
        setBuffer.mockClear();
        updatePosition.mockClear();
    })
    it("when a tag is clicked, setuffer is called and app state is updated", () => {
        let tags = app.find("Tag");
        let dataTransfer = {
            setData: jest.fn((str1, str2) => {console.log(str1, str2)}),
            setDragImage: jest.fn((image, x, y) => {
                console.log(x, y);
            })
        }
        for(let tag of tags){
            //console.log(tag);
            mount(tag).find("div.tag-container").simulate("dragstart", {dataTransfer: dataTransfer});
        };
        expect(setBuffer).toHaveBeenCalledTimes(3);
    });
    it("sets the bufferElement when a tag is dragged", () => {
        let dataTransfer = {
            setData: jest.fn((str1, str2) => {console.log(str1, str2)}),
            setDragImage: jest.fn((image, x, y) => {
                console.log(x, y);
            })
        };
        let tag = app.find("GenericContainerTag");
        tag.find("div.tag-container").simulate("dragstart", {dataTransfer: dataTransfer});
        expect(Object.keys(app.state("BufferElement")).length).toBeGreaterThan(0);
    });
    it("calls updatePosition when compatible Tag UI is dropped on Container", () =>{
        let dataTransfer1 = {
            setData: jest.fn((str1, str2) => {console.log(str1, str2)}),
            setDragImage: jest.fn((image, x, y) => {
                console.log(x, y);
            })
        };
        let tag = app.find("GenericContainerTag");
        tag.find("div.tag-container").simulate("dragstart", {
            clientX: 92,
            clientY: 92,
            target: {
                getBoundingClientRect: jest.fn(() => {
                    return {left: 20, top: 20}
                }),
            },
            dataTransfer: dataTransfer1,
        });
        let Container = app.find("RootContainer").find("GenericContainer").find("Container");
        let dataDrop = {
            pageX: 25,
            pageY: 27,
            target: {
                getBoundingClientRect: jest.fn(() => {
                    return {left: 5, top: 15}
                }),
            },
            dataTransfer: {getData: jest.fn((str) => {
                if(str === "id"){
                    return setBuffer.mock.calls[0][0].id
                }
                else if(str === "compatibility"){
                    return "GENERIC";
                }
            })}
        };
        Container.find("div.container").simulate("drop", {...dataDrop});
        expect(updatePosition).toHaveBeenCalled();
    });
    it("does not call updatePosition when incompatible Tag UI is dropped on Container", () => {
        let dataTransfer1 = {
            setData: jest.fn((str1, str2) => {console.log(str1, str2)}),
            setDragImage: jest.fn((image, x, y) => {
                console.log(x, y);
            })
        };
        let tag = app.find("GenericContainerTag");
        tag.find("div.tag-container").simulate("dragstart", {dataTransfer: dataTransfer1});
        let Container = app.find("RootContainer").find("GenericContainer").find("Container");
        let dataDrop = {
            pageX: 25,
            pageY: 27,
            target: {
                getBoundingClientRect: jest.fn(() => {
                    return {left: 5, top: 15}
                }),
            },
            dataTransfer: {getData: jest.fn((str) => {
                if(str === "id"){
                    return setBuffer.mock.calls[0][0].id
                }
                else if(str === "compatibility"){
                    return "FORM";
                }
            })}
        };
        Container.find("div.container").simulate("drop", {...dataDrop});
        expect(updatePosition).not.toHaveBeenCalled();
    });
    it("calls updatePosition when CompWrapper is dropped on compatible Container", () => {
        let byID = app.state("byID");
        let id = "some-id";
        let formState = {
            [id]: {
                type: 'form-container',
                id: id,
                parent: "root",
                left: 10,
                top: 10,
                width: 72,
                height: 72, 
                isContainer: true,
                compatibility: "GENERIC"
              }
        };
        app.setState({byID: {...byID, ...formState}, idArray: ["root", id]});
        let FormContainer = app.find("CompWrapper").findWhere((comp) => {
            if(comp.prop("data")){
                if(comp.prop("data").id === id){
                    return true;
                };
                return false;
            }
            return false;
        });
        let dataTransfer = {
            setData: jest.fn((str1, str2) => {console.log(str1, str2)}),
        };
        FormContainer.find("div.comp-wrapper-container").simulate("dragstart", {
            clientX: 92,
            clientY: 92,
            target: {
                getBoundingClientRect: jest.fn(() => {
                    return {left: 20, top: 20}
                }),
            },
            dataTransfer: dataTransfer
        });
        let genericContainer = app.find("RootContainer").find("GenericContainer").findWhere((ui) => {
            if(ui.prop("data")){
                if(ui.prop("data").id == "root"){
                    return true;
                };
                return false;
            }
            return false;
        });
        let container = genericContainer.find("Container").findWhere(ui => {
            if(ui.prop("allowed") === "GENERIC"){
                return true;
            };
            return false;
        });
        let dataTransfer2 = {
            getData: jest.fn((compatibility) => {
                return GENERIC;
            })
        };
        let divContainer = container.find("div.container").first();
        let dataDrop = {
            pageX: 1,
            pageY: 2,
            target: {
                getBoundingClientRect: jest.fn(() => {
                    return {left: 5, top: 15}
                }),
            },
            dataTransfer: {getData: jest.fn((str) => {return id})},
            preventDefault: jest.fn(),
            stopPropagtion: jest.fn(),
        };
        divContainer.simulate("drop", {...dataDrop});
        expect(updatePosition).toHaveBeenCalled();
    });
    it("does not call updatePosition when incompatible CompWrapper UI is dropped on Container", () => {
        let byID = app.state("byID");
        let id = "some-id";
        let formState = {
            [id]: {
                type: 'form-container',
                id: id,
                parent: "root",
                left: 10,
                top: 10,
                width: 72,
                height: 72, 
                isContainer: true,
                compatibility: "GENERIC"
              }
        };
        app.setState({byID: {...byID, ...formState}, idArray: ["root", id]});
        let FormContainer = app.find("CompWrapper").findWhere((comp) => {
            if(comp.prop("data")){
                if(comp.prop("data").id === id){
                    return true;
                };
                return false;
            }
            return false;
        });
        let dataTransfer = {
            setData: jest.fn((str1, str2) => {console.log(str1, str2)}),
            clientX: 92,
            clientY: 92,
            target: {
                getBoundingClientRect: jest.fn(() => {
                    return {left: 20, top: 20}
                }),
            },
        };
        FormContainer.find("div.comp-wrapper-container").simulate("dragstart", {dataTransfer: dataTransfer});
        let genericContainer = app.find("RootContainer").find("GenericContainer").findWhere((ui) => {
            if(ui.prop("data")){
                if(ui.prop("data").id == "root"){
                    return true;
                };
                return false;
            }
            return false;
        });
        let container = genericContainer.find("Container").findWhere(ui => {
            if(ui.prop("allowed") === "GENERIC"){
                return true;
            };
            return false;
        });
        let divContainer = container.find("div.container").first();
        divContainer.simulate("dragenter", {
            dataTransfer: dataTransfer2,
            preventDefault: jest.fn(),
            stopPropagtion: jest.fn(),
        });
        let dataDrop = {
            pageX: 1,
            pageY: 2,
            target: {
                getBoundingClientRect: jest.fn(() => {
                    return {left: 5, top: 15}
                }),
            },
            dataTransfer: {getData: jest.fn((str) => {
                if(str === "id"){
                    return id
                }
                else if(str === "compatibility"){
                    return "FORM";
                }
            })}
        };
        divContainer.simulate("drop", {...dataDrop});
        expect(updatePosition).not.toHaveBeenCalled();
    });
    //it("corects the shift when updatePosition is called", () => {});
    it("calls updateDim when right div of DimensionWrapper is clicked", () =>{
        let byID = app.state("byID");
        let id = "some-id";
        let formState = {
            [id]: {
                type: 'form-container',
                id: id,
                parent: "root",
                left: 10,
                top: 10,
                width: 72,
                height: 72, 
                isContainer: true,
                compatibility: "GENERIC"
              }
        };
        app.setState({byID: {...byID, ...formState}, idArray: ["root", id]});
        let DimensionWrapper = app.find("DimensionWrapper").last();
        let DimDiv = DimensionWrapper.find("div.comp-wrapper-right")
        DimDiv.simulate(
            "mousedown",
            {
                preventDefault: jest.fn(),
                stopPropagation: jest.fn()
            }
        );
        app.find("div.App").simulate(
            "mousemove",
            {
                pageX: 15,
                pageY: 25
            }
        );
        expect(updateDim).toHaveBeenCalled();
        DimDiv.simulate(
            "mouseup",
            {
                stopPropagation: jest.fn()
            }
        );
        expect(mouseUp).toHaveBeenCalled();
    });
    it("calls updateDim when bottom div of DimensionWrapper is clicked", () => {
        let byID = app.state("byID");
        let id = "some-id";
        let formState = {
            [id]: {
                type: 'form-container',
                id: id,
                parent: "root",
                left: 10,
                top: 10,
                width: 72,
                height: 72, 
                isContainer: true,
                compatibility: "GENERIC"
              }
        };
        app.setState({byID: {...byID, ...formState}, idArray: ["root", id]});
        let DimensionWrapper = app.find("DimensionWrapper").last();
        let DimDiv = DimensionWrapper.find("div.comp-wrapper-bottom")
        DimDiv.simulate(
            "mousedown",
            {
                preventDefault: jest.fn(),
                stopPropagation: jest.fn()
            }
        );
        app.find("div.App").simulate(
            "mousemove",
            {
                pageX: 15,
                pageY: 25
            }
        );
        expect(updateDim).toHaveBeenCalled();
        DimDiv.simulate(
            "mouseup",
            {
                stopPropagation: jest.fn()
            }
        );
        expect(mouseUp).toHaveBeenCalled();
    });
    it("UI state is changed when updateDim is called", () => {});
})