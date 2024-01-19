/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    let arr1 = [];
    let arr2 = [];
    dfs(buildTree(root1), arr1);
    dfs(buildTree(root2), arr2);

    return arr1.join('-') === arr2.join('-');
};

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

const dfs = (root, arr) => {
    if (!root) {
        return;
    }
    if (!root.left && !root.right && root.val) {
        arr.push(root.val);
    }
    dfs(root.left, arr);
    dfs(root.right, arr);
}

console.log(leafSimilar([3,5,1,6,2,9,8,null,null,7,4],[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]));
console.log(leafSimilar([1,2,3],[1,3,2]));