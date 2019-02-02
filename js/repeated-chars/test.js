const repeatedChars = require('./index');

describe('repeatedChars()', () => {
    it('repeatedChars function exists', () => {
        expect(typeof repeatedChars).toEqual('function');
    });

    it('Finds the repeated char', () => {
        expect(repeatedChars('abcd')).toEqual(expect.arrayContaining([]));

        expect(repeatedChars('abcccccccd')).toEqual(expect.arrayContaining(['c']));

        expect(repeatedChars('aapple 012311114440')).toEqual(
            expect.arrayContaining(['4', '0', 'a'])
        );
    });
});
