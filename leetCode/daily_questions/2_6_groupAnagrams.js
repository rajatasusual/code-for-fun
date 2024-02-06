/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const map = {};
    const array = [[]];
    let count = 1;

    while (strs.length > 0) {
        const popped = strs.pop();
        if (popped == '') {
            array[0].push('');
        } else {
            const sorted = popped.split('').sort().join();
            if (map[sorted]) {
                array[map[sorted]].push(popped);
            } else {
                map[sorted] = count;
                array.push([popped]);
                count++;
            }
        }

    }
    if(array[0].length == 0)
        array.shift();
    return array;

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["", ""]));