import vowels from './vowels';

describe('vowels()', () => {
    it('Vowels is a function', () => {
        expect(typeof vowels).toEqual('function');
    });

    it('returns the number of vowels used', () => {
        expect(vowels('aeiou')).toEqual(5);
    });

    it('returns the number of vowels used when they are capitalized', () => {
        expect(vowels('AEIOU')).toEqual(5);
    });

    it('returns the number of vowels used - 5', () => {
        expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
    });

    it('returns the number of vowels used - 0', () => {
        expect(vowels('bcdfghjkl')).toEqual(0);
    });
});
