function nestedForFrequency(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }

    for (const element of arr1) {
        const elementToDelete = arr2.indexOf(element * 2)
        if(elementToDelete === -1) {
            return false;
        }
        arr2.splice(elementToDelete, 1);
    }

    return true;
}

console.log(nestedForFrequency(
    [1, 2, 3, 1, 1, 3, 2],
    [4, 2, 2, 6, 2, 6, 4]));