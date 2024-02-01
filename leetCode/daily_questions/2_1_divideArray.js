/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {

    let result = [];

    nums.sort((a, b) => a - b);


    for (let i = 0; i <= nums.length - 3; i = i + 3) {
        if (nums[i + 2] - nums[i] <= k) {
            result.push([nums[i], nums[i + 1], nums[i + 2]]);
        } else 
            return [];
    }

    return result;


};

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
console.log(divideArray([1, 3, 3, 2, 7, 3], 3));
console.log(divideArray([15,13,12,13,12,14,12,2,3,13,12,14,14,13,5,12,12,2,13,2,2], 2));