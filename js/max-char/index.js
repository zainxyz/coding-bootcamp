// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
//
// What is the most common character in the string?
//
// Does string A have the same characters as string B (is it an anagram)?
//
// Does the given string have any repeated characters in it?
//
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    // Go through each char in the string
    for (let char of str) {
        // If the char exists in the charMap, then add 1 to it
        // if (charMap[char]) {
        //     charMap[char] += 1;
        // } else {
        //     // Otherwise, set the char in charMap to 1
        //     charMap[char] = 1;
        // }

        // If char exists in charMap, add 1 to it,
        // otherwise set it to 1.
        charMap[char] = charMap[char] + 1 || 1;
    }
    // Determine the maximium of the keys in the object
    const max = Object.keys(charMap).reduce(
        (max, min) => (charMap[max] > charMap[min] ? max : min),
        ''
    );
    // Return the max
    return max;
}

module.exports = maxChar;
