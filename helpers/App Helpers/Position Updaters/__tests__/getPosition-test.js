import getPosition from '../getPosition.js';

/* nb */

describe("returns the asolute position of ui element", () => {
    let data = {
        "root": {
            type: 'generic-container',
            id: "root",
            parent: null,
            left: 0,
            top: 0,
            width: 720,
            height: 720, 
            isContainer: true,
            compatibility: "GENERIC"
          },
          "some-id": {
            type: 'form-container',
            id: "some-id",
            parent: "root",
            left: 10,
            top: 10,
            width: 72,
            height: 72, 
            isContainer: true,
            compatibility: "GENERIC"
          },
          "another-id": {
            type: 'form-container',
            id: "another-id",
            parent: "some-id",
            left: 10,
            top: 10,
            width: 72,
            height: 72, 
            isContainer: true,
            compatibility: "GENERIC"
          }
    };
    it("returns a left position of 30 for data object with id: 'another-id'", () => {
        let left = getPosition("another-id", data, "left");
        expect(left).toBe(20);
    });
})