/**
 * @param {number} x
 * @return {number}
 */
function reverse(n) {
    // Array#reverse method takes no argument.
    // You can use `Math.abs()` instead of changing the sign if negative.
    // Conversion of string to number can be done with unary plus operator.
    var reverseN = +String(Math.abs(n)).split('').reverse().join('');
    // Use a number constant instead of calculating the power
    if (reverseN > 0x7FFFFFFF) {
        return 0;
    }
    // As we did not change the sign, you can do without the boolean isNegative.
    // Don't multiply with -1, just use the unary minus operator.
    // The ternary operator might interest you as well (you could even use it
    //    to combine the above return into one return statement)
    return n < 0 ? -reverseN : reverseN;
}

console.log(reverse(-123));