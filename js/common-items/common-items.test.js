import commonItems from './common-items';

describe('commonItems()', () => {
    it('should return false as the two arrays do not have any common items', () => {
        expect(commonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])).toBeFalsy();
    });

    it("should return true as the two arrays have a common item of 'x'", () => {
        expect(commonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])).toBeTruthy();
    });
});
