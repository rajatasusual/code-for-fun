/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var maxAncestorDiff = function (root) {

    const tree = buildTree(root);
    const maxDiff = dfs(tree, tree.val, tree.val, 0);
    
    console.log(maxDiff);
    return maxDiff;

}

function buildTree(nums) {
    if (nums.length === 0) {
        return null;
    }
    let root = {
        val: nums[0],
        left: null,
        right: null
    };
    let q = [root];
    let i = 1;
    while (i < nums.length) {
        let curr = q.shift();
        if (curr.val === null) {
            continue;
        }
        if (i < nums.length) {
            curr.left = {
                val: nums[i++],
                left: null,
                right: null
            };
            q.push(curr.left);
        }
        if (i < nums.length) {
            curr.right = {
                val: nums[i++],
                left: null,
                right: null
            };
            q.push(curr.right);
        }
    }

    return root;
}

function dfs (tree, max, min, diff){

    if (!tree){
        return diff;
    }
    if (tree !== null && tree.val !== null){
        max = Math.max(max, tree.val);
        min = Math.min(min, tree.val);
    } else {
        return diff;
    }

    const currDiff = max - min;
    if(currDiff > diff){
        diff = currDiff;
    }

    return Math.max(dfs(tree.left, max, min, diff), dfs(tree.right, max, min, diff));
}

maxAncestorDiff([8,3,10,1,6,null,14,null,null,4,7,13]);
maxAncestorDiff([1,null,2,null,0,3]);