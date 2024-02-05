/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const result = s.split('').flatMap(c => s.indexOf(c) === s.lastIndexOf(c) ? c : []);

    return result.length ? s.indexOf(result[0]) : -1
};

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))