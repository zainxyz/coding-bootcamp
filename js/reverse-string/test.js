import reverse from './index';

describe('reverseString()', () => {
    it('Reverse function exists', () => {
        expect(reverse).toBeDefined();
    });

    it('Reverse reverses a string', () => {
        expect(reverse('abcd')).toEqual('dcba');
    });

    it('Reverse reverses a string again', () => {
        expect(reverse('  abcd')).toEqual('dcba  ');
    });
});
