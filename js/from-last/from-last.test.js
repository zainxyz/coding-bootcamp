import fromLast from './from-last';
import List from '../linked-list/linked-list';

describe('fromLast()', () => {
    it('fromLast is a function', () => {
        expect(typeof fromLast).toEqual('function');
    });

    it('fromLast returns the node n elements from the end', () => {
        const l = new List();

        l.insertLast('a');
        l.insertLast('b');
        l.insertLast('c');
        l.insertLast('d');
        l.insertLast('e');

        expect(fromLast(l, 3).data).toEqual('b');
    });
});
