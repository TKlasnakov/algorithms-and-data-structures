function someRecursive(arr, func) {
    const currValue = arr.pop()
    if(func(currValue)) return true;
    if(!arr.length) return false;
    return someRecursive(arr, func);
}