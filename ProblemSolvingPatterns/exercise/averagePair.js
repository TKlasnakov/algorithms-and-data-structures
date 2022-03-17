/**
 * Write a function called averagePair. Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 *
 * Bonus Constraints:
 * Time: O(N)
 * Space: O(1)
 * */

function averagePair(arr, average) {
    if(!arr.length) {
        return false;
    }
    let end = arr.length - 1;
    let start = 0;

    while (start < end) {
        const num = (arr[start] + arr[end]) / 2;
        if(num === average) {
            return true
        }

        if(average > num) {
            start++
        } else {
            end--
        }
    }

    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));