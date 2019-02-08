// Given an array of integers,
// return indices of the two numbers
// such that they add up to a specific target.
//
// You may assume that each input would have
// exactly one solution, and you may not
// use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
    // If length of 2 then return 0, 1
    if (nums.length === 2) {
        return [0, 1];
    }
    // Build an empty map
    const length = nums.length;
    const map = {};
    // Go through the nums array
    for (let idx = 0; idx < length; idx++) {
        let diff = target - nums[idx];
        let found = map[diff];
        if (found !== undefined) {
            return [found, idx];
        } else {
            map[nums[idx]] = idx;
        }
    }
}

export default twoSum;
