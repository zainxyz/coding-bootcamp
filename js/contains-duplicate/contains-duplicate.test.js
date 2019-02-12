import containsDuplicate from './contains-duplicate';

describe('containsDuplicate()', () => {
    it('returns true as there are duplicates found', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
    });

    it('returns false as there are no duplicates', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
    });

    it('returns true as the array contains duplicates', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
    });
});
