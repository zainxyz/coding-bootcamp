import firstUniqueChar from './first-unique-char';

describe('firstUniqueChar()', () => {
    it("should return 'f' as the first unique char", () => {
        expect(firstUniqueChar('foobar')).toEqual('f');
    });

    it("should return 'd' as the first unique char", () => {
        expect(firstUniqueChar('aabbccdef')).toEqual('d');
    });

    it('should return 2 as the first unique char', () => {
        expect(firstUniqueChar('loveleetcode')).toEqual(2);
    });

    it('should return 0 as the first unique char', () => {
        expect(firstUniqueChar('leetcode')).toEqual(0);
    });

    it("should return 'No Unique Chars Found'", () => {
        expect(firstUniqueChar('aabbcc')).toEqual('No Unique Chars Found');
    });
});
