function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let index = 0
        let changeIndex = false;
        for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
            index = j;
            changeIndex = true;
        }
        if(changeIndex) {
            arr[index] = currentValue
        }
    }

    return arr;
}

console.log(insertionSort([12, 3, 62, 756, 45, 123, 1, 7]));