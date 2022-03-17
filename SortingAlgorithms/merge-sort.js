function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftSide = mergeSort(arr.slice(0, mid));
    const rightSide = mergeSort(arr.slice(mid));

    return merge(leftSide, rightSide)
}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArray = [];

    while (arr1[i] && arr2[j]) {
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (arr1[i]) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (arr2[j]) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

console.log(mergeSort([13, 7, 10, 2]));