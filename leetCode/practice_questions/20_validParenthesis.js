/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = new Array();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;

};