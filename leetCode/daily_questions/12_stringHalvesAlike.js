/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const half = s.length / 2;

    let count1 = 0, count2 = 0;

    for (let i = 0; i < half; i++) {
        if (isVowel(s[i])) {
            count1++;
        }
        if(isVowel(s[s.length - i - 1])) {
            count2++;
        }
    }

    console.log(count1 === count2);

    return count1 === count2;
};

const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
const isVowel = (c) => {
    return vowelSet.has(c);
};

halvesAreAlike("book");
halvesAreAlike("textbook");