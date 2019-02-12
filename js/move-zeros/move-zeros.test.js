import moveZeros from './move-zeros';

describe('moveZeros()', () => {
    it('should moe zeros to the end of the array', () => {
        const nums = [0, 1, 0, 3, 12];

        expect(moveZeros(nums)).toEqual([1, 3, 12, 0, 0]);
    });
});
