/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    let obj = {};
    
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }

    let arr2 = Object.values(obj);

    let set = new Set(arr2);

    return set.size === arr2.length;
};