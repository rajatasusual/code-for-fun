/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trusted = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trusted[a] -= 1;
        trusted[b] += 1;
    }

    for (let i = 1; i <= n; i++) {
        if (trusted[i] === n - 1) {
            return i;
        }
    }

    return -1;    
};

console.log(findJudge(3, [[1, 3], [2, 3]]))
console.log(findJudge(5, [[1, 3], [1, 4], [1, 5], [2, 5], [3, 2], [4, 1], [4, 2], [4, 3], [4, 5], [5, 1], [5, 2], [5, 4]]))
console.log(findJudge(3, [[1, 2], [2, 3]]));