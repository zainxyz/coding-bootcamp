import longestWord from './longest-word';

describe('longestWord()', () => {
    it("should determine longest word to be 'time'", () => {
        expect(longestWord('   fun&!!! time')).toEqual('time');
    });

    it("should determine longest word to be 'love'", () => {
        expect(longestWord('I love cats')).toEqual('love');
    });
});
