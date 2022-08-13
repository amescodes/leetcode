/*
Given an integer array nums, move all 0's to the end of it while maintaining the 
relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0] 

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done?

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var len = nums.length;

    for (var i = 0; i < len; i++) {
        if (nums[i] === 0) {
            for (var j = i + 1; j < len; j++) {
                if (nums[j] != 0) {
                    var save = nums[i];
                    nums[i] = nums[j];
                    nums[j] = save;

                    break;
                }
            }
        }
    }
};
// faster solution...
var moveZeroes = function(nums) {
    if (nums == null || nums.length == 0) return;

    var insertPos = 0;
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) nums[insertPos++] = nums[i];
    }

    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
};