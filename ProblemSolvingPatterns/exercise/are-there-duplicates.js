/**
 * Implement a function called, areThereDuplicates  which accepts a
 * variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 *
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 * */


function areThereDuplicates(...args) {
    if(!args.length) {
        return false;
    }

    let argumentsObj = {};

    for (const argument of args) {
        if (argumentsObj[argument]) {
            return true;
        }
        argumentsObj[argument] = 1;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 1));