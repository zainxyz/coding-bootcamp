import twoSum from './two-sum';

describe('twoSum()', () => {
    it('should return indices of the two numbers that add up to the target of 9', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;

        expect(twoSum(nums, target)).toEqual(expect.arrayContaining([0, 1]));
    });

    it('should return indices of the two numbers that add up to the target of 15', () => {
        const nums = [7, 2, 7, 11, 8, 15, 8];
        const target = 15;

        expect(twoSum(nums, target)).toEqual(expect.arrayContaining([2, 4]));
    });
});
