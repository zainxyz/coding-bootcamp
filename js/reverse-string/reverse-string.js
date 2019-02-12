// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str = '') {
    // if (!str || str.length < 2 || typeof str !== 'string') {
    //     return '';
    // }

    // return str.split('').reduce((res, char) => `${char}${res}`, '');
    return [...str].reduce((res, char) => `${char}${res}`, '');
}

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// function reverse(str) {
//     let reversed = '';
//
//     for (let char of str) {
//         reversed = `${char}${reversed}`;
//     }
//
//     return reversed;
// }

export default reverse;
