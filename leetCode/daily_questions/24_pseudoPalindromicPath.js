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
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
    let count = [0];
    const tree = buildTree(root);
    let frequency = {};
    dfs(tree, frequency, count);

    return count[0];
};

function dfs(tree, frequency, count) {

    if (!tree) {
        return;
    }
    
    frequency[tree.val] = (frequency[tree.val] || 0) + 1;

    if (!tree.left && !tree.right) {

        let currCount = 0;

        for (let key in frequency) {
            if (frequency[key] % 2 === 1) {
                currCount++;
            }
        }
        if (currCount < 2) {
            count[0]++;
        }
        
        return;
    }

    dfs(tree.left, frequency, count);
    if(!tree.left) {
        frequency[tree.left.val]--;
    }
    dfs(tree.right, frequency, count);
    if(!tree.right) {
        frequency[tree.right.val]--;
    }
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

console.log(pseudoPalindromicPaths([2, 3, 1, 3, 1, null, 1]));
console.log(pseudoPalindromicPaths([2, 1, 1, 1, 3, null, null, null, null, null, 1]));
console.log(pseudoPalindromicPaths([9]));