/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let longest = '';

    for (let i = 0; i < s.length; i++) {

        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);

        console.log(odd, even);

        let longestPalindrome = odd.length > even.length ? odd : even;

        if (longestPalindrome.length > longest.length) {
            longest = longestPalindrome;
        }
    }

    return longest;
    
};

var expandAroundCenter = function(s, left, right) {

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.substring(left + 1, right);
}


console.log(longestPalindrome("babad"));