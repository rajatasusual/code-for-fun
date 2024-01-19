/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    nums.sort((a, b) => a - b);

    console.log(nums);

    let operations = 0;

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        let j = i + 1;
        while (nums[j] == value) {
            j++;
        }
        const count = j - i;
        if(count == 1)
            return -1;

        operations += count == 2 ? 1 : 
            count % 3 == 0 ? count / 3 : 
             Math.floor(count / 3) + 1;

        i = j - 1;
    }

    console.log(operations);
    return operations;

};

minOperations([13,7,13,7,13,7,13,13,7]);