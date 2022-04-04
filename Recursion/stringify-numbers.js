function stringifyNumbers(obj) {
    for (const objKey in obj) {
        if(typeof obj[objKey] === 'number') {
            obj[objKey] = obj[objKey].toString();
        }

        if(typeof obj[objKey] === 'object') {
            stringifyNumbers(obj[objKey])
        }
    }

    return obj;
}