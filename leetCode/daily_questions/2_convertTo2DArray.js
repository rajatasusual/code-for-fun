/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let result = [[]];
    let dictionary = {};

    for (let i = 0; i < nums.length; i++) {
        if (dictionary[nums[i]]) {
            const count = dictionary[nums[i]];
            if(result.length > count)
                result[count].push(nums[i]);
            else {
                result[count] = [nums[i]];
            }

            dictionary[nums[i]] = count + 1;

        } else {
            dictionary[nums[i]] = 1;
            result[0].push([nums[i]]);
        }
    }
    
    return result;
};
