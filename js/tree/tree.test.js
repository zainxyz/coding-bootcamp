import Tree from './tree';
import Node from './node';

describe('tree()', () => {
    describe('Node', () => {
        it('Node is a constructor', () => {
            expect(typeof Node.prototype.constructor).toEqual('function');
        });

        it('Node has a data and children properties', () => {
            const n = new Node('a');
            expect(n.data).toEqual('a');
            expect(n.children.length).toEqual(0);
        });

        it('Node can add children', () => {
            const n = new Node('a');
            n.add('b');
            expect(n.children.length).toEqual(1);
            expect(n.children[0].children).toEqual([]);
        });

        it('Node can remove children', () => {
            const n = new Node('a');
            n.add('b');
            expect(n.children.length).toEqual(1);
            n.remove('b');
            expect(n.children.length).toEqual(0);
        });
    });

    describe('Tree', () => {
        it('starts empty', () => {
            const t = new Tree();
            expect(t.root).toEqual(null);
        });

        it('Can traverse bf', () => {
            const letters = [];
            const t = new Tree();
            t.root = new Node('a');
            t.root.add('b');
            t.root.add('c');
            t.root.children[0].add('d');

            t.traverseBF(node => {
                letters.push(node.data);
            });

            expect(letters).toEqual(['a', 'b', 'c', 'd']);
        });

        it('Can traverse DF', () => {
            const letters = [];
            const t = new Tree();
            t.root = new Node('a');
            t.root.add('b');
            t.root.add('d');
            t.root.children[0].add('c');

            t.traverseDF(node => {
                letters.push(node.data);
            });

            expect(letters).toEqual(['a', 'b', 'c', 'd']);
        });
    });
});
