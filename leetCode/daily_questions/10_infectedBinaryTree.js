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
var amountOfTime = function (root, start) {
    const tree = buildTree(root);

    const time = dfs(tree, start);

    console.log(time);

    return time;
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
        if(curr.val === null) {
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

function printTree(root) {
    if (!root) {
        return;
    }
    printTree(root.left);
    console.log(root.val + " ");
    printTree(root.right);
}

function dfs(tree, start) {
    if (!tree) {
        return 0;
    }
    if (tree.val === start) {
        return 0;
    }
    let left = dfs(tree.left, start);
    let right = dfs(tree.right, start);
    return Math.max(left, right) + 1;
}

amountOfTime([1, 5, 3, null, 4, 10, 6, 9, 2], 3);
amountOfTime([1,2,null,3,null,4,null,5], 2);