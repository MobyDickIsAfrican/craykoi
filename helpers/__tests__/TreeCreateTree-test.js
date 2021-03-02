import Tree from '../Tree.js';
import {threeChildren, ids, oneChild, oneID} from '../tree-data.js';

/* nb */
describe('creates a tree data Type', () => {
    let tree;
    let oneTree
    beforeEach(() => {
        tree = new Tree(threeChildren, ids);
        oneTree = new Tree(oneChild, oneID);
    });
    it('returns tree with same number of nodes as state object', () => {
        tree.createTree();
        // returns number of nodes
        let number = 0;
        function numberOfNodes (Node){
            let children = Node.getChildren();
            if(children){
                //add the current node to number
                number = number + 1;
                Object.values(children).forEach(element => {
                    numberOfNodes(element);
                });
                return number;
            }
            else{
                return 1;
            }
        };
        expect(numberOfNodes(tree.getTree())).toEqual(Object.values(threeChildren).length + 1);
    });
    it('returns a tree witha single node if root UI has no children', () => {
        let number = 0;
        function numberOfNodes (Node){
            let children = Node.getChildren();
            if(children){
                number = number + 1;
                Object.values(children).forEach(element => {
                    number = number + numberOfNodes(element);
                });
                return number;
            }
            else{
                return 1;
            }
        };
        expect(numberOfNodes(oneTree.getTree())).toEqual(1);
    });
    describe('returns an object of members: all nodes and orphans: array of nodes that still need to find their parents',
    () => {
        beforeEach(() => {
            tree = new Tree(threeChildren, ids);
            oneTree = new Tree(oneChild, oneID);
        });
        it('it returns members with same number of entries as the uiFlatState', () => {
            let family = tree.getFamily();
            let members = family.members;
            expect(Object.entries(members).length - 1).toBe(Object.entries(threeChildren).length);
        });
    });

})