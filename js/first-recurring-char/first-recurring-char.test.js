import firstRecurringChar from './first-recurring-char';

describe('firstRecurringChar()', () => {
    it("should return '2' as the first recurring char", () => {
        expect(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
    });

    it("should return '2' as the first recurring char even though '5' recurres", () => {
        expect(firstRecurringChar([2, 5, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
    });

    it("should return '1' as the first recurring char", () => {
        expect(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
    });

    it("should return 'undefined' since there are no recurring chars", () => {
        expect(firstRecurringChar([2, 3, 4, 5])).toEqual(undefined);
    });
});
