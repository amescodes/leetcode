
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const n = nums.length;
    const rem = k % n
    let left = nums.slice(0,n-rem)
    nums.splice(0,n-rem)
    for(var i = 0; i < left.length; i++){
        nums[rem+i] = left[i]
    }
};