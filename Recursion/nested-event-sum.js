function nestedEvenSum (obj, sum = 0) {
    for (const objKey in obj) {
        if(typeof obj[objKey] === 'object') {
            sum += nestedEvenSum(obj[objKey]);
        } else {
            if(typeof obj[objKey] === 'number' && obj[objKey] % 2 === 0) {
                sum += obj[objKey];
            }
        }
    }

    return sum
}