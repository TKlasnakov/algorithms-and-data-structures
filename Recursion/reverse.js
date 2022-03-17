/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * */

function reverse(str) {
    let output = '';
    recursStr(str);
    function recursStr(recStr) {
        if(!recStr.length) return;
        output += recStr[recStr.length - 1];

        return recursStr(recStr.slice(0, -1));
    }

    return output;
}

console.log(reverse('rithmschool')); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'