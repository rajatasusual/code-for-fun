/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {

    let dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));

    dp[0] = matrix[0];

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (j == 0) {
                dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
            } else if (j == matrix[0].length - 1) {
                dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
            } else {
                dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]);
            }
        }
    }

    return Math.min(...dp[matrix.length - 1]);

};

console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]))