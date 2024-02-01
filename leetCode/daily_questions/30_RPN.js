/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    while (tokens.length) {
        let token = tokens.shift();
        
        if (token == "+") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first + second);
        } else if (token == "-") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        } else if (token == "*") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first * second);
        } else if (token == "/") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(Math.trunc(first / second));
        } else {
            stack.push(parseInt(token));
        }

    }

    return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));