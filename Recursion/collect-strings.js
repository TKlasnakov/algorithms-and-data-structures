function collectStrings(obj) {
    const collection = []
    for (const objKey in obj) {
        if(typeof obj[objKey] === 'object') {
            return collection.concat(collectStrings(obj[objKey]));
        }

        if(typeof obj[objKey] === 'string') {
            collection.push(obj[objKey]);
        }
    }

    return collection
}