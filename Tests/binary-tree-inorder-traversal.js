/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

example 2:
Input: root = []
Output: []

example 3:
Input: root = [1]
Output: [1]

example 4: 
Input: root = [1,2]
Output: [2,1]

example 5:
Input: root = [1,null,2]
Output: [1,2]

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up:
Recursive solution is trivial, could you do it iteratively?
*/

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;

  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
};
