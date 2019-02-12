import rotateArray from './rotate-array';

describe('rotateArray()', () => {
    it('rotates the array 3 times', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const times = 3;

        expect(rotateArray(arr, times)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    it('rotates the array 2 times', () => {
        const arr = [-1, -100, 3, 99];
        const times = 2;

        expect(rotateArray(arr, times)).toEqual([3, 99, -1, -100]);
    });
});
