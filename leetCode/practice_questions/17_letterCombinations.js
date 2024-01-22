/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    const digitToChar = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    result = [];
    digits.split('').forEach(digit => {
        if (result.length === 0) {
            result = digitToChar[digit].split('');
        }
        else
            result = digitToChar[digit].split('').flatMap(d => result.map(v => v + d));
    })

    return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));