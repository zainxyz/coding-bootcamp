import List from './linked-list';
import Node from './node';

describe('linkedList()', () => {
    it('List is a class', () => {
        expect(typeof List.prototype.constructor).toEqual('function');
    });

    it('Node is a class', () => {
        expect(typeof Node.prototype.constructor).toEqual('function');
    });

    describe('A Node', () => {
        it('has properties "data" and "next"', () => {
            const node = new Node('a', 'b');
            expect(node.data).toEqual('a');
            expect(node.next).toEqual('b');
        });
    });

    describe('Insert First', () => {
        it('appends a node to the start of the list', () => {
            const l = new List();
            l.insertFirst(1);
            expect(l.head.data).toEqual(1);
            l.insertFirst(2);
            expect(l.head.data).toEqual(2);
        });
    });

    describe('Size', () => {
        it('returns the number of items in the linked list', () => {
            const l = new List();
            expect(l.size()).toEqual(0);
            l.insertFirst(1);
            l.insertFirst(1);
            l.insertFirst(1);
            l.insertFirst(1);
            expect(l.size()).toEqual(4);
        });
    });

    describe('GetFirst', () => {
        it('returns the first element', () => {
            const l = new List();
            l.insertFirst(1);
            expect(l.getFirst().data).toEqual(1);
            l.insertFirst(2);
            expect(l.getFirst().data).toEqual(2);
        });
    });

    describe('GetLast', () => {
        it('returns the last element', () => {
            const l = new List();
            l.insertFirst(2);
            expect(l.getLast()).toEqual({ data: 2, next: null });
            l.insertFirst(1);
            expect(l.getLast()).toEqual({ data: 2, next: null });
        });
    });

    describe('Clear', () => {
        it('empties out the list', () => {
            const l = new List();
            expect(l.size()).toEqual(0);
            l.insertFirst(1);
            l.insertFirst(1);
            l.insertFirst(1);
            l.insertFirst(1);
            expect(l.size()).toEqual(4);
            l.clear();
            expect(l.size()).toEqual(0);
        });
    });

    describe('RemoveFirst', () => {
        it('removes the first node when the list has a size of one', () => {
            const l = new List();
            l.insertFirst('a');
            l.removeFirst();
            expect(l.size()).toEqual(0);
            expect(l.getFirst()).toEqual(null);
        });

        it('removes the first node when the list has a size of three', () => {
            const l = new List();
            l.insertFirst('c');
            l.insertFirst('b');
            l.insertFirst('a');
            l.removeFirst();
            expect(l.size()).toEqual(2);
            expect(l.getFirst().data).toEqual('b');
            l.removeFirst();
            expect(l.size()).toEqual(1);
            expect(l.getFirst().data).toEqual('c');
        });
    });

    describe('RemoveLast', () => {
        it('RemoveLast removes the last node when list is empty', () => {
            const l = new List();
            expect(() => {
                l.removeLast();
            }).not.toThrow();
        });

        it('RemoveLast removes the last node when list is length 1', () => {
            const l = new List();
            l.insertFirst('a');
            l.removeLast();
            expect(l.head).toEqual(null);
        });

        it('RemoveLast removes the last node when list is length 2', () => {
            const l = new List();
            l.insertFirst('b');
            l.insertFirst('a');

            l.removeLast();

            expect(l.size()).toEqual(1);
            expect(l.head.data).toEqual('a');
        });

        it('RemoveLast removes the last node when list is length 3', () => {
            const l = new List();
            l.insertFirst('c');
            l.insertFirst('b');
            l.insertFirst('a');
            l.removeLast();

            expect(l.size()).toEqual(2);
            expect(l.getLast().data).toEqual('b');
        });
    });

    describe('InsertLast', () => {
        it('adds to the end of the list', () => {
            const l = new List();
            l.insertFirst('a');

            l.insertLast('b');

            expect(l.size()).toEqual(2);
            expect(l.getLast().data).toEqual('b');
        });
    });

    describe('GetAt', () => {
        it('returns the node at given index', () => {
            const l = new List();
            expect(l.getAt(10)).toEqual(null);

            l.insertLast(1);
            l.insertLast(2);
            l.insertLast(3);
            l.insertLast(4);

            expect(l.getAt(0).data).toEqual(1);
            expect(l.getAt(1).data).toEqual(2);
            expect(l.getAt(2).data).toEqual(3);
            expect(l.getAt(3).data).toEqual(4);
        });
    });

    describe('RemoveAt', () => {
        it('removeAt doesnt crash on an empty list', () => {
            const l = new List();
            expect(() => {
                l.removeAt(0);
                l.removeAt(1);
                l.removeAt(2);
            }).not.toThrow();
        });

        it('removeAt doesnt crash on an index out of bounds', () => {
            expect(() => {
                const l = new List();
                l.insertFirst('a');
                l.removeAt(1);
            }).not.toThrow();
        });

        it('removeAt deletes the first node', () => {
            const l = new List();
            l.insertLast(1);
            l.insertLast(2);
            l.insertLast(3);
            l.insertLast(4);
            expect(l.getAt(0).data).toEqual(1);
            l.removeAt(0);
            expect(l.getAt(0).data).toEqual(2);
        });

        it('removeAt deletes the node at the given index', () => {
            const l = new List();
            l.insertLast(1);
            l.insertLast(2);
            l.insertLast(3);
            l.insertLast(4);
            expect(l.getAt(1).data).toEqual(2);
            l.removeAt(1);
            expect(l.getAt(1).data).toEqual(3);
        });

        it('removeAt works on the last node', () => {
            const l = new List();
            l.insertLast(1);
            l.insertLast(2);
            l.insertLast(3);
            l.insertLast(4);
            expect(l.getAt(3).data).toEqual(4);
            l.removeAt(3);
            expect(l.getAt(3)).toEqual(null);
        });
    });

    describe('InsertAt', () => {
        it('inserts a new node with data at the 0 index when the list is empty', () => {
            const l = new List();
            l.insertAt('hi', 0);
            expect(l.getFirst().data).toEqual('hi');
        });

        it('inserts a new node with data at the 0 index when the list has elements', () => {
            const l = new List();
            l.insertLast('a');
            l.insertLast('b');
            l.insertLast('c');
            l.insertAt('hi', 0);
            expect(l.getAt(0).data).toEqual('hi');
            expect(l.getAt(1).data).toEqual('a');
            expect(l.getAt(2).data).toEqual('b');
            expect(l.getAt(3).data).toEqual('c');
        });

        it('inserts a new node with data at a middle index', () => {
            const l = new List();
            l.insertLast('a');
            l.insertLast('b');
            l.insertLast('c');
            l.insertLast('d');
            l.insertAt('hi', 2);
            expect(l.getAt(0).data).toEqual('a');
            expect(l.getAt(1).data).toEqual('b');
            expect(l.getAt(2).data).toEqual('hi');
            expect(l.getAt(3).data).toEqual('c');
            expect(l.getAt(4).data).toEqual('d');
        });

        it('inserts a new node with data at a last index', () => {
            const l = new List();
            l.insertLast('a');
            l.insertLast('b');
            l.insertAt('hi', 2);
            expect(l.getAt(0).data).toEqual('a');
            expect(l.getAt(1).data).toEqual('b');
            expect(l.getAt(2).data).toEqual('hi');
        });

        it('insert a new node when index is out of bounds', () => {
            const l = new List();
            l.insertLast('a');
            l.insertLast('b');
            l.insertAt('hi', 30);

            expect(l.getAt(0).data).toEqual('a');
            expect(l.getAt(1).data).toEqual('b');
            expect(l.getAt(2).data).toEqual('hi');
        });
    });

    describe('ForEach', () => {
        it('applies a transform to each node', () => {
            const l = new List();

            l.insertLast(1);
            l.insertLast(2);
            l.insertLast(3);
            l.insertLast(4);

            l.forEach(node => {
                node.data += 10;
            });

            expect(l.getAt(0).data).toEqual(11);
            expect(l.getAt(1).data).toEqual(12);
            expect(l.getAt(2).data).toEqual(13);
            expect(l.getAt(3).data).toEqual(14);
        });
    });

    describe('for...of loops', () => {
        it('works with the linked list', () => {
            const l = new List();

            l.insertLast(1);
            l.insertLast(2);
            l.insertLast(3);
            l.insertLast(4);

            for (let node of l) {
                node.data += 10;
            }

            expect(l.getAt(0).data).toEqual(11);
            expect(l.getAt(1).data).toEqual(12);
            expect(l.getAt(2).data).toEqual(13);
            expect(l.getAt(3).data).toEqual(14);
        });

        it('for...of works on an empty list', () => {
            const l = new List();
            expect(() => {
                for (let node of l) {
                }
            }).not.toThrow();
        });
    });
});
