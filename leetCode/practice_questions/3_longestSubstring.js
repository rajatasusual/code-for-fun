/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let charSet = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    
    while(right < s.length) {
        if(!charSet.has(s[right])) {
            charSet.add(s[right]);
            right++;
            max = Math.max(max, charSet.size);
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }
    
    return max;
    
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));