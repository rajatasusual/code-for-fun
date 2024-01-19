/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const translation = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let number = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = translation[s[i]];
        const next = translation[s[i + 1]];

        if (cur < next) {
            number += next - cur;
            i++;
        } else {
            number += cur;
        }
    }

    return number;
}