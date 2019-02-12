// --- Directions
// Given a string, return a new string with the reversed
// order of the vowels characters
// --- Examples
//   reverse('hello') === 'holle'

// function reverse(str) {
//     const strCopy = str.split('');
//     const vowels = 'aeiou';
//
//     const vowelChars = [];
//     const nonVowelChars = [];
//
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelChars.push(char);
//         } else {
//             nonVowelChars.push(char);
//         }
//     }
//
//     strCopy.forEach((char, idx) => {
//         if (vowels.includes(char)) {
//             strCopy[idx] = vowelChars.pop();
//         }
//     });
//
//     return strCopy.join('');
// }

function reverse(str) {
    const vowels = str.split('').filter(a => /[aeiou]/i.test(a));
    return str.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
}

export default reverse;
