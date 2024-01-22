/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {

    let result = new Array(2).fill(null);

    let set = {};

    for (let i = 0; i < nums.length; i++) {

        if (set[nums[i]]) {
            result[0] = nums[i];
        } else {
            set[nums[i]] = true;
        }
    }

    for (let i = 1; i <= nums.length; i++) {

        if (!set[i]) {
            result[1] = i;
        }
    }

    return result;

};