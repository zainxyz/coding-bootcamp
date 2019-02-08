import addTwoNumbers from './add-two-linked-lists';

describe('addTwoNumbers()', () => {
    it('should add the two linked list and return sum', () => {
        const one = [2, 4, 3];
        const two = [5, 6, 4];

        expect(addTwoNumbers(one, two)).toEqual(807);
    });
});
