/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    
    const dp = new Array(n + 1).fill(0);
    
    // Iterate through the array elements
    for (let i = 0; i < n; i++) {
        let curMax = 0, curSum = 0;
        
        for (let j = i; j > Math.max(-1, i - k); j--) {
            curMax = Math.max(curMax, arr[j]);
            
            const cur = curMax * (i - j + 1) + dp[j];
            
            curSum = Math.max(curSum, cur);
        }
        
        dp[i + 1] = curSum;
    }
    
    return dp[n];
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4));