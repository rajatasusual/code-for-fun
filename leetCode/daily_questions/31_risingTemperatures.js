/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    let stack = [];
    let result = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {

        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
    
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));