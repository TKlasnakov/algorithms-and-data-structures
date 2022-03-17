function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {
                index = j;
            }
        }
        if (i !== index) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([12, 3, 62, 756, 45, 123, 1, 7]));