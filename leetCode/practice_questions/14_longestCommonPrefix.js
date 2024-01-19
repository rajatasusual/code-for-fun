/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    const totalStrings = strs.length;

    let commonPrefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 0; j < totalStrings; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return commonPrefix;
            }
        }
        commonPrefix += char;
    }

    return commonPrefix;
    
};