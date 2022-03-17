function pivot(arr, start) {
    let currentIndex = start;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[start]) {
            [arr[i], arr[currentIndex]] = [arr[currentIndex], arr[i]];
            currentIndex++;
        }
    }

    return arr
}

console.log(pivot([6, 44, 72, 12, 1, 5, 3], 0));