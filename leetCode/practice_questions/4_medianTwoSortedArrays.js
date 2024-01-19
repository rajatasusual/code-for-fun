/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let result = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    if (result.length % 2 === 1) {
        return result[Math.floor(result.length / 2)];
    } else {
        return (result[result.length / 2] + result[result.length / 2 - 1]) / 2;
    }
    
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));