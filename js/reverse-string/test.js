import reverse from './index';

describe('reverseString()', () => {
    test('Reverse function exists', () => {
        expect(reverse).toBeDefined();
    });

    test('Reverse reverses a string', () => {
        expect(reverse('abcd')).toEqual('dcba');
    });

    test('Reverse reverses a string again', () => {
        expect(reverse('  abcd')).toEqual('dcba  ');
    });
});
