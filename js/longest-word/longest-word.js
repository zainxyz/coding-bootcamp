// Challenge
// Have the function LongestWord(sen)
// take the sen parameter being passed
// and return the largest word in the string.
// If there are two or more words that are the
// same length, return the first word from the
// string with that length. Ignore punctuation
// and assume sen will not be empty.
//
// Sample Test Cases
//
// Input:"fun&!! time"
//
// Output:"time"
//
//
// Input:"I love dogs"
//
// Output:"love"

function longestWord(sentence) {
    // Trim the spaces on the sentence on either side,
    // and remove any characters other than words and spaces.
    const filtered = sentence.trim().replace(/[^\w ]/gi, '');
    // Split the string into an array, at the ' ' (space),
    // and sort it in decending order.
    const sorted = filtered.split(' ').sort((a, b) => b.length - a.length);
    // Return the very first element of the sorted array.
    return sorted.shift();
}

export default longestWord;
