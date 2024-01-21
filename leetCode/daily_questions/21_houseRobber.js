/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];

    if(nums.length == 1) {
        return dp[0];
    }

    dp[1] = Math.max(nums[0], nums[1]);

    if(nums.length == 2) {
        return dp[1];
    }

    for(let i = 2; i < nums.length; i++) {

        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

    }

    return dp[nums.length - 1];
    
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));