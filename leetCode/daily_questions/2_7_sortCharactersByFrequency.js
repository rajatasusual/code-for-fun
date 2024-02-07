/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (map[char])
            map[char]++;
        else
            map[char] = 1;
    }

    let resultArray = Object.entries(map).sort((a, b) => b[1] - a[1]);

    let result = '';

    resultArray.forEach(entry => {
        result += entry[0].repeat(entry[1]);
    })

    return result;
};

console.log(frequencySort('loveleetcode'));
console.log(frequencySort('tree'));
console.log(frequencySort('cccaaa'));