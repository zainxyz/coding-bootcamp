// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Steps
//
// - Create a string **result** with first character of the input string capitalized
// - For each **char** in the string
//      - If the **char** to the left is a space
//          - Capitalize it and add it to result
//      - Else
//          - Add it to result
// function capitalize(str) {
//     let result = str[0].toUpperCase();
//
//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//
//     return result;
// }

// Steps
//
// - Make an empty array **words**
// - Split the input string by spaces to get an array
// - For each word in the array
//      - Uppercase the first letter of the word
//      - Join first letter with rest of string
//      - Push result into **words** array
// - Join **words** into a string and return it
// function capitalize(str) {
//     const words = [];
//
//     for (let word of str.split(' ')) {
//         // word = `${word[0].toUpperCase()}${word.slice(1)}`;
//         word = word[0].toUpperCase() + word.slice(1);
//
//         words.push(word);
//     }
//
//     return words.join(' ');
// }

function capitalize(str) {
    const arr = str.split(' ');

    return arr.map(a => `${a[0].toUpperCase()}${a.slice(1)}`).join(' ');
}

module.exports = capitalize;
