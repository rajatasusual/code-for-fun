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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  return dfs(buildTree(root), low, high, 0);  
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

const dfs = (root, low, high, sum) => {
  if (!root) {
    return sum;
  }
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }
  if (root.val > low) {
    sum = dfs(root.left, low, high, sum);
  }
  if (root.val < high) {
    sum = dfs(root.right, low, high, sum);
  }
  return sum;
}

console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10));