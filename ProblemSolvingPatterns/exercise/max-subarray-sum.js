/**
 * Given an array of integers and a number, write a function called maxSubarraySum
 * , which finds the maximum sum of a subarray with the length of the number passed to the function.
 *
 * Note that a subarray must consist of consecutive  elements from the original array.
 * In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 *
 * Constraints:
 * Time Complexity - O(n)
 * Space Complexity - 0(1)
 * */

function maxSubarraySum(arr, num) {
    if(!arr.length || num > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));