function findDigitsInNumber(number) {
    return (Math.log10((number ^ (number >> 31)) - (number >> 31)) | 0) + 1;
}

function getDigitValue(number, location) {
    return Math.floor((Math.abs(number) / Math.pow(10, location)) % 10);
}

function radixSort(arr) {
    let maxDigits = 0;

    for (let i = 0; i < arr.length; i++) {
        const digits = findDigitsInNumber(arr[i]);
        maxDigits = maxDigits < digits ? digits : maxDigits;
    }

    for (let j = 0; j < maxDigits; j++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            const index = getDigitValue(arr[i], j);
            buckets[index].push(arr[i]);
        }
        arr = [].concat(...buckets)
    }

    return arr;
}

console.log(radixSort([10, 6, 33, 274, 103, -3]));
