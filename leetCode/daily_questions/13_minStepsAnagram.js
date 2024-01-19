/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const sFreq = countLetterFrequency(s);
    const tFreq = countLetterFrequency(t);

    const keys = Object.keys(sFreq);

    let steps = 0;
    
    for (let i = 0; i < keys.length; i++) {
        if(tFreq[keys[i]] === undefined) {
            steps += sFreq[keys[i]];
        }
        if (sFreq[keys[i]] > tFreq[keys[i]]) {
            steps += Math.abs(sFreq[keys[i]] - tFreq[keys[i]]);
        }
    }

    return steps;

};

const countLetterFrequency = (s) => {
    const freq = {};
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = freq[s[i]] ? freq[s[i]] + 1 : 1;
    }
    return freq;
}

console.log(minSteps("leetcode", "practice"));
console.log(minSteps("bab", "aba"));