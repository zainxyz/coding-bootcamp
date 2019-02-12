// Google Question
//
// Given an array of integers,
// return the very first recurring character.
//
// Input = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// Output = 2;
//
// Input = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// Output = 1;
//
// Input = [2, 3, 4, 5];
// Output = undefined;

// function firstRecurringChar(array) {
//     const length = array.length;
//
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (array[i] === array[j]) {
//                 return array[i];
//             }
//         }
//     }
//
//     return undefined;
// }

// function firstRecurringChar(array) {
//     const map = {};
//
//     for (let item of array) {
//         if (map[item]) {
//             return item;
//         }
//         map[item] = true;
//     }
//
//     return undefined;
// }

function firstRecurringChar(array) {
    const set = new Set();

    for (let item of array) {
        if (set.has(item)) {
            return item;
        }
        set.add(item);
    }

    return undefined;
}

export default firstRecurringChar;
