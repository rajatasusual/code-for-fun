/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {

    let result = 0;
    let dp = new Array(nums.length).fill(0);
    
    for(let step = 1; step < nums.length; step++) {
        dp = new Array(nums.length).fill(0);
        for(let i = 2*step; i < nums.length; i+=step) {
            
            if(nums[i] - nums[i - 1*step] === nums[i - 1*step] - nums[i - 2*step]) {
                dp[i] = dp[i - 1*step] + 1;
                result += dp[i];
            }

            console.log(result, i - 2*step, i - 1*step,i);
        }
    }
    
    return result;
    
};

//console.log(numberOfArithmeticSlices([2,4,6,8,10]));
console.log(numberOfArithmeticSlices([7,7,7,7,7]));