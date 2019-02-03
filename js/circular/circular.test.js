import circular from './circular';
import List from '../linked-list/linked-list';
import Node from '../linked-list/node';

describe('circular()', () => {
    it('circular', () => {
        expect(typeof circular).toEqual('function');
    });

    it('circular detects circular linked lists', () => {
        const l = new List();
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');

        l.head = a;
        a.next = b;
        b.next = c;
        c.next = b;

        expect(circular(l)).toEqual(true);
    });

    it('circular detects circular linked lists linked at the head', () => {
        const l = new List();
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');

        l.head = a;
        a.next = b;
        b.next = c;
        c.next = a;

        expect(circular(l)).toEqual(true);
    });

    it('circular detects non-circular linked lists', () => {
        const l = new List();
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');

        l.head = a;
        a.next = b;
        b.next = c;
        c.next = null;

        expect(circular(l)).toEqual(false);
    });
});
