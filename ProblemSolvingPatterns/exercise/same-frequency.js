/**
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 * Time: O(N)
 *
 * */

function sameFrequency(num1, num2) {
    const num1Str = String(num1);
    const num2Str = String(num2);

    if(num1Str.length !== num2Str.length) {
        return false;
    }

    let num1Obj = {};
    let num2Obj = {};

    for (let i = 0; i < num1Str.length; i++) {
        num1Obj[num1Str[i]] = ++num1Obj[num1Str[i]] || 1;
        num2Obj[num2Str[i]] = ++num2Obj[num2Str[i]] || 1;
    }

    for (const element in num1Obj) {
        if(num1Obj[element] !== num2Obj[element]) return false;
    }

    return true;
}

console.log(sameFrequency(1828, 2818));
