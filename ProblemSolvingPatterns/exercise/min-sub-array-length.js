function findLongestSubstring(substr) {
    let i = 0;
    let j = 0;
    let visited = {}
    let longestSubstr = 0;

    while (i < substr.length) {
        if(visited[substr[i]]) {
            longestSubstr = Math.max(Object.keys(visited).length, longestSubstr);
            delete visited[substr[j]];
            j++;
        } else {
            visited[substr[i]] = substr[i];
            i++;
        }
        longestSubstr = Math.max(Object.keys(visited).length, longestSubstr);
    }

    return longestSubstr;
}