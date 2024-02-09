var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const dp = new Array(n).fill(1);
    let maxSize = 1, maxIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                if (dp[i] > maxSize) {
                    maxSize = dp[i];
                    maxIndex = i;
                }
            }
        }
    }

    const result = [];
    let num = nums[maxIndex];
    for (let i = maxIndex; i >= 0; i--) {
        if (num % nums[i] === 0 && dp[i] === maxSize) {
            result.push(nums[i]);
            num = nums[i];
            maxSize--;
        }
    }

    return result;
};


//console.log(largestDivisibleSubset([1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114]));
//console.log(largestDivisibleSubset([1, 2, 3]));
//console.log(largestDivisibleSubset([1, 2, 4, 8]));
//console.log(largestDivisibleSubset([3,4,16,8]));
console.log(largestDivisibleSubset([5, 9, 18, 54, 90, 108, 180, 360, 540, 720]));