/**
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 *
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 *
 * Bonus:
 * You must do this with constant or O(1) space and O(n) time.
 * */

function countUniqueValues(arr) {
    if(!arr.length) {
        return 0;
    }
    let i = 1;
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j] ;
        }
    }

    return i;
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 4, 4, 5, 6, 6, 11, 13, 13, 14]));


