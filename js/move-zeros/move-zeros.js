// Given an array nums, write a function
// to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
//
// Example:
//
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
//
// You must do this in-place without
// making a copy of the array.
// Minimize the total number of operations.

// function moveZeros(nums) {
//     let length = nums.length;
//     let zeroIdx = 0;
//     let nonZeroIdx = 0;
//
//     for (; nonZeroIdx < length; nonZeroIdx++) {
//         console.log(zeroIdx, nonZeroIdx);
//
//         if (!nums[nonZeroIdx]) {
//             continue;
//         }
//
//         [nums[zeroIdx], nums[nonZeroIdx]] = [nums[nonZeroIdx], nums[zeroIdx]];
//         zeroIdx++;
//     }
//
//     return nums;
// }

function moveZeros(nums) {
    const length = nums.length;
    let zeroIdx = 0;
    let nonZeroIdx = 0;

    for (; nonZeroIdx < length; nonZeroIdx++) {
        if (nums[nonZeroIdx] !== 0) {
            const temp = nums[zeroIdx];
            nums[zeroIdx] = nums[nonZeroIdx];
            nums[nonZeroIdx] = temp;
            zeroIdx++;
        }
    }

    return nums;
}

export default moveZeros;
