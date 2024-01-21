/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    let sign = "+";
    let result = 0;

    let i = 0;

    for (; i < s.length; i++) {

        if(s[i]!= " ")
            break;
    }

    if(s[i] == "+" || s[i] == "-") {
        sign = s[i];
        i++;
    }

    for(; i < s.length; i++) {

        if(s[i] < "0" || s[i] > "9")
            break;

        result = result * 10 + (s[i] - "0");
    }

    if(sign == "-")
        result = -result;

    if(result > 2147483647)
        result = 2147483647;
    if(result < -2147483648)
        result = -2147483648;

    return result;
    
};