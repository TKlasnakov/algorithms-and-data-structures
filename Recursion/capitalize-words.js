function capitalizedWords (arr, arr2 = []) {
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].toUpperCase());
    }
    return arr2
}