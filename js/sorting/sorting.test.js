import * as S from './sorting';

const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const mergeSort = S.mergeSort;
const merge = S.merge;

function getArray() {
    return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
    return [-124, -40, 0, 7, 21, 100, 500];
}

describe('sorting()', () => {
    describe('Bubble sort', () => {
        it('sorts an array', () => {
            expect(bubbleSort(getArray())).toEqual(getSortedArray());
        });
    });

    describe('Selection sort', () => {
        it('sorts an array', () => {
            expect(selectionSort(getArray())).toEqual(getSortedArray());
        });
    });

    describe('Merge sort', () => {
        it('merge function can join together two sorted arrays', () => {
            const left = [1, 10];
            const right = [2, 8, 12];

            expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
        });

        it('sorts an array', () => {
            expect(mergeSort(getArray())).toEqual(getSortedArray());
        });
    });
});
