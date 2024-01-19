/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    if (numRows === 1) return s;

    if (s.length < 3) return s;

    let arr = new Array(numRows).fill('').map(() => new Array(Math.ceil(s.length / 2)).fill(''));

    let counter = -1;

    let goingDown = true;

    let column = 0;

    for (let i = 0; i < s.length; i++) {

        if (goingDown && counter < numRows - 1) {
            counter++;
            arr[counter][column] = s[i];
        } else if (goingDown && counter == numRows - 1) {
            goingDown = false;
            counter = numRows - 2;
            column++;
            arr[counter][column] = s[i];
        } else if (!goingDown && counter > 0) {
            counter--;
            column++;
            arr[counter][column] = s[i];
        } else {
            goingDown = true;
            counter++;
            arr[counter][column] = s[i];
        }
    }

    return arr.flat().join('');
};

console.log(convert("ABC", 2));