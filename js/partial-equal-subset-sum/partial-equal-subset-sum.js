// Given a non-empty array containing only positive integers,
// find if the array can be partitioned into two subsets such
// that the sum of elements in both subsets is equal.
//
// Note:
// Each of the array element will not exceed 100.
// The array size will not exceed 200.
//
// Example 1:
//
// Input: [1, 5, 11, 5]
//
// Output: true
//
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
//
// Example 2:
//
// Input: [1, 2, 3, 5]
//
// Output: false
//
// Explanation: The array cannot be partitioned into equal sum subsets.

/**
 * Can the given array be partitioned into two subsets,
 * such that the sum of elements in both subsets is equal.
 *
 * @method canPartition
 * @param  {number}     nums A list of numbers
 * @return {boolean}
 */
function canPartition(nums) {
    let sum = nums.reduce((res, val) => res + val, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;
    const memo = new Array(target + 1).fill(false);

    for (let num of nums) {
        console.log(num);
    }
}

export default canPartition;
