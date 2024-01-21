/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    const translation = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    let result = "";

    while (num > 0) {
        if(num >= 1000) {
            result += translation[1000];
            num -= 1000;
        } else if(num >= 900) {
            result += translation[900];
            num -= 900;
        } else if(num >= 500) {
            result += translation[500];
            num -= 500;
        } else if(num >= 400) {
            result += translation[400];
            num -= 400;
        } else if(num >= 100) {
            result += translation[100];
            num -= 100;
        } else if(num >= 90) {
            result += translation[90];
            num -= 90;
        } else if(num >= 50) {
            result += translation[50];
            num -= 50;
        } else if(num >= 40) {
            result += translation[40];
            num -= 40;
        } else if(num >= 10) {
            result += translation[10];
            num -= 10;
        } else if(num >= 9) {
            result += translation[9];
            num -= 9;
        } else if(num >= 5) {
            result += translation[5];
            num -= 5;
        } else if(num >= 4) {
            result += translation[4];
            num -= 4;
        } else if(num >= 1) {
            result += translation[1];
            num -= 1;
        } else {
            break;
        }
    }

    return result;
    
};

console.log("MCMXCIV" == intToRoman(1994))
