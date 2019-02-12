// Given 2 arrays, create a function that lets
// a user know (true / false) whether
// these two arrays contain any common items.
//
// Example:
//
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//
// should return false.
//
// Example:
//
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
//
// should return true.

// 2 inputs, always going to be arrays - no size limit
// output to be either true or false

// function commonItems(array1, array2) {
//     for (let one of array1) {
//         for (let two of array2) {
//             if (one === two) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function commonItems(array1 = [], array2 = []) {
//     // loop through first array and create a map
//     // where properties === item in array
//     // loop through second array and see if item
//     // in second array exists in the map
//
//     const map = {};
//
//     for (let item1 of array1) {
//         if (!map[item1]) {
//             map[item1] = true;
//         }
//     }
//
//     for (let item2 of array2) {
//         if (map[item2]) {
//             return true;
//         }
//     }
//
//     return false;
// }

function commonItems(array1 = [], array2 = []) {
    return array1.some(item => array2.includes(item));
}

export default commonItems;
