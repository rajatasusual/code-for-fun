/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    // Create two arrays to store positive and negative numbers
    const pos = []; // array for positive numbers
    const neg = []; // array for negative numbers
    
    // Separate positive and negative numbers
    for (const num of nums) {
        if (num > 0) {
            pos.push(num); // if the number is positive, add it to the positive array
        } else {
            neg.push(num); // if the number is non-positive (including zero), add it to the negative array
        }
    }
    
    // Merge positive and negative arrays alternatively
    const res = new Array(nums.length);
    let k = 0; // index for the result array
    let i = 0; // index for the positive array
    let j = 0; // index for the negative array
    
    // Alternate between positive and negative arrays until one of them is exhausted
    while (i < pos.length && j < neg.length) {
        res[k++] = pos[i++]; // add a positive number
        res[k++] = neg[j++]; // add a negative number
    }
    
    // Add remaining elements from the positive array, if any
    while (i < pos.length) {
        res[k++] = pos[i++];
    }
    
    // Add remaining elements from the negative array, if any
    while (j < neg.length) {
        res[k++] = neg[j++];
    }
    
    return res;
};