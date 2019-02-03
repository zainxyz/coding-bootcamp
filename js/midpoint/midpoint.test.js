import midpoint from './midpoint';
import LinkedList from '../linked-list/linked-list';

describe('midpoint()', () => {
    it('Midpoint is a function', () => {
        expect(typeof midpoint).toEqual('function');
    });

    describe('Midpoint returns the middle node of an odd numbered list', () => {
        it('when the list has 3 elements', () => {
            const l = new LinkedList();
            l.insertLast('a');
            l.insertLast('b');
            l.insertLast('c');
            expect(midpoint(l).data).toEqual('b');
        });

        it('when the list has 5 elements', () => {
            const l = new LinkedList();
            l.insertLast('a');
            l.insertLast('b');
            l.insertLast('c');
            l.insertLast('d');
            l.insertLast('e');
            expect(midpoint(l).data).toEqual('c');
        });
    });

    describe('Midpoint returns the middle node of an even numbered list', () => {
        it('when the list has 2 elements', () => {
            const l = new LinkedList();
            l.insertLast('a');
            l.insertLast('b');
            expect(midpoint(l).data).toEqual('a');
        });

        it('when the list has 4 elements', () => {
            const l = new LinkedList();
            l.insertLast('a');
            l.insertLast('b');
            l.insertLast('c');
            l.insertLast('d');
            expect(midpoint(l).data).toEqual('b');
        });
    });
});
