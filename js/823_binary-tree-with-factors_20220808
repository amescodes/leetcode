/*

Given an array of unique integers, arr, where each integer arr[i] is 
strictly greater than 1.

We make a binary tree using these integers, and each number may be used 
for any number of times. Each non-leaf node's value should be equal to
the product of the values of its children.

Return the number of binary trees we can make. The answer may be too 
large so return the answer modulo 109 + 7.
 

Example 1:
Input: arr = [2,4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]

Example 2:
Input: arr = [2,4,5,10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
 
Constraints:
1 <= arr.length <= 1000
2 <= arr[i] <= 109
All the values of arr are unique.

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  let total = arr.length;
  let seenInts = {}
  let sortedArr = arr.sort((a, b) => a - b);
  seenInts[sortedArr[0]] = 1;
  for (var i = 1; i < sortedArr.length; i++) {
    for (var j = 0; j < Object.keys(seenInts).length; j++) {
      let mult = sortedArr[i] / sortedArr[j]
      if (mult >= 2 &&
        Number.isInteger(mult) &&
        sortedArr.includes(mult)) {
        var count = 1;

        var result = seenInts[mult];
        if (typeof result == "undefined") {
          result = 0;
        }

        count += seenInts[sortedArr[j]] * result;
        seenInts[sortedArr[i]] = count;
        total += count;
      }
    }
  }

  return total;
};

console.log(numFactoredBinaryTrees([18, 3, 6, 2]))