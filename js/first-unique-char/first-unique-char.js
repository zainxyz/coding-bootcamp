// You are given an a string of characters
// including duplicates. You need to find
// the first non-repeating / unique character.
//
// input: foobar
// output: f
//
// input: aabbccdef
// output: d
//
// input: aabbcc
// output: 'No Unique Character Found'

function firstUniqueChar(str) {
    const map = {};

    for (let idx in str) {
        if (map[str[idx]] === undefined) {
            map[str[idx]] = 0;
        }
        map[str[idx]]++;
    }

    for (let idx in str) {
        if (map[str[idx]] === 1) {
            return Number(idx);
        }
    }

    return -1;
}

// function firstUniqueChar(str) {
//     const map = {};
//
//     for (let char of str) {
//         if (map[char] === undefined) {
//             map[char] = 0;
//         }
//         map[char]++;
//     }
//
//     for (let char of str) {
//         if (map[char] === 1) {
//             return char;
//         }
//     }
//
//     return 'No Unique Chars Found';
// }

export default firstUniqueChar;
