// Given an array of integers,
// find if the array contains any duplicates.
//
// Your function should return true
// if any value appears at least twice
// in the array, and it should return
// false if every element is distinct.
//
// Example 1:
//
// Input: [1,2,3,1]
// Output: true
// Example 2:
//
// Input: [1,2,3,4]
// Output: false
// Example 3:
//
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// function containsDuplicate(nums) {
//     const map = {};
//
//     for (let item of nums) {
//         if (map[item]) {
//             return true;
//         }
//         map[item] = true;
//     }
//
//     return false;
// }

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

// function containsDuplicate(nums) {
//     const map = {};
//
//     for (let item of nums) {
//         if (map[item]) {
//             map[item]++;
//         } else {
//             map[item] = 1;
//         }
//     }
//
//     return Object.values(map).some(val => val > 1);
// }

export default containsDuplicate;
