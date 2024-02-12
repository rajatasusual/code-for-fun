/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let counter = 0;
    let counterValue = 0;
    let mapFreq = {};

    if(nums.length == 1) {
        return nums[0];
    }

    for(let i = 0; i < nums.length; i++) {

        if(!mapFreq[nums[i]]) {
            mapFreq[nums[i]] = 1;
        } else {
            mapFreq[nums[i]]++;
            if(mapFreq[nums[i]] > nums.length / 2) {
                return nums[i];
            }
            if(mapFreq[nums[i]] > counter) {
                counter = mapFreq[nums[i]];
                counterValue = nums[i];
            }
        }
    }

    return counterValue;
    
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));