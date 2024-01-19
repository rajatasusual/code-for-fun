/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let max = 0;
    let dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        console.log(dp);
        max = Math.max(max, dp[i]);
    }

    console.log(max);
    return max;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]); // 4
lengthOfLIS([0, 1, 0, 3, 2, 3]); // 4
lengthOfLIS([7, 7, 7, 7, 7, 7, 7]); // 1