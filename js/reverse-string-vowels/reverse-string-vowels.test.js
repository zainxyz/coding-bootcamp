import reverse from './reverse-string-vowels';

describe('reverseString()', () => {
    it('Reverse reverses a string', () => {
        expect(reverse('abcd')).toEqual('abcd');
    });

    it('Reverse reverses a string again', () => {
        expect(reverse('hello')).toEqual('holle');
    });

    it('Reverse reverses Goodbye', () => {
        expect(reverse('Goodbye')).toEqual('Geodbyo');
    });
});
