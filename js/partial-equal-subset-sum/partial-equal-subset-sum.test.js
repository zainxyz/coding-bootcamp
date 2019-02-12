import canPartition from './partial-equal-subset-sum';

describe('canPartition()', () => {
    it('can be partitioned as [1, 5, 5] and [11]', () => {
        expect(canPartition([1, 5, 11, 5])).toBeTruthy();
    });

    it('cannot be partitioned into equal sum subsets', () => {
        expect(canPartition([1, 2, 3, 5])).toBeFalsy();
    });
});
