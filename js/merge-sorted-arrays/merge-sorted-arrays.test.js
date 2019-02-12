import mergeSortedArrays from './merge-sorted-arrays';

describe('mergeSortedArrays()', () => {
    it('merges the sorted arrays', () => {
        expect(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])).toEqual(
            expect.arrayContaining([0, 3, 4, 4, 6, 30, 31])
        );
    });
});
