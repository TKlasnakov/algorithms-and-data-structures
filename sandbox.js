function rotLeft(a, d) {
    const num = a.splice(0, d);
    return a.concat(num);
}

console.log(rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10));