/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    const freq1 = getFreq(word1);
    const freq2 = getFreq(word2);
    if (Object.keys(freq1).every((key) => freq1[key] === freq2[key]))
        return true;

    return compareFreq(freq1, freq2);
};

var compareFreq = (freq1, freq2) => {
    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);
    if (keys1.length !== keys2.length) return false;

    if(keys1.sort().join() !== keys2.sort().join()) return false;
    
    // if value sets of freq1 and freq2 are same return true
    const values1 = Object.values(freq1).sort();
    const values2 = Object.values(freq2).sort();

    if (values1.join() === values2.join()) return true;

    return false;
}


var getFreq = (word) => {
    const freq = {};
    for (let i = 0; i < word.length; i++) {
        freq[word[i]] = (freq[word[i]] || 0) + 1;
    }
    return freq;
}

//console.log(closeStrings("abc", "bca"));
//console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("abbzzca", "babzzcz"));
console.log(closeStrings("uau","ssx"));