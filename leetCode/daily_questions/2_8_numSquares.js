/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (N) {

    // If N is perfect square
    if (isPerfectSquare(N))
        return 1;

    // If N is sum of 2 perfect squares
    for (let i = 1; i * i < N; i++) {
        if (isPerfectSquare(N - i * i))
            return 2;
    }

    // If N is sum of 3 perfect squares
    if (legendreFunction(N))
        return 3;

    // Otherwise, N is the
    // sum of 4 perfect squares
    return 4;
};

function legendreFunction(N) {

    // Factor out the powers of 4
    while (N % 4 == 0)
        N = Math.floor(N / 4);

    // N is NOT of the
    // form 4^a * (8b + 7)
    if (N % 8 != 7)
        return true;
    else
        return false;
}

// Javascript program for the above approach

// Function that returns true if N
// is a perfect square
function isPerfectSquare(N) {
    let floorSqrt = Math.floor(Math.sqrt(N));

    return (N == floorSqrt * floorSqrt);
}

// Function that returns true check if
// N is sum of three squares
function legendreFunction(N) {

    // Factor out the powers of 4
    while (N % 4 == 0)
        N = Math.floor(N / 4);

    // N is NOT of the
    // form 4^a * (8b + 7)
    if (N % 8 != 7)
        return true;
    else
        return false;
}