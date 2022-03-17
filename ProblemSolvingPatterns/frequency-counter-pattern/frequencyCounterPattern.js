function frequencyCounterPattern (arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }

    const wordCharacters = {};
    const anagramCharacters = {};

    for (const element of arr1) {
        wordCharacters[element] = ++wordCharacters[element] || 1;
    }

    for (const element of arr2) {
        anagramCharacters[element] = ++anagramCharacters[element] || 1;
    }

    for (const key in wordCharacters) {
        if(anagramCharacters[key] !== wordCharacters[key]) {
           return false;
        }
    }

    return true;
}

console.log(frequencyCounterPattern(
    'ada',
    'dad'));