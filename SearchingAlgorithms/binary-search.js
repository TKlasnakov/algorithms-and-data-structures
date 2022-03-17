function binarySearch(arr, value) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let middleIndex = Math.floor((endIndex + startIndex) / 2);

    while (arr[middleIndex] !== value && startIndex < endIndex) {
        if (value < arr[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((endIndex + startIndex) / 2);
    }

    return arr[middleIndex] ? middleIndex : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
