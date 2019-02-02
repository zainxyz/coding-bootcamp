// --- Directions
// Does the given string have any repeated characters in it?
//
// --- Examples
// repeatedChars("abcd") === []
// repeatedChars("abcccccccd") === ['c']
// repeatedChars("aapple 1231111") === ['a', '1']

function repeatedChars(str) {
    const charMap = {};
    // Go through each char in the string
    for (let char of str) {
        // If char exists in charMap, add 1 to it,
        // otherwise set it to 1.
        charMap[char] = charMap[char] + 1 || 1;
    }
    // Determine the repeated chars
    const repeated = Object.keys(charMap).reduce(
        (rep, key) => (charMap[key] > 1 ? [key, ...rep] : rep),
        []
    );
    // Return the repeated
    return repeated;
}

export default repeatedChars;
