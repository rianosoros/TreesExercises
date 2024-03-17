/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    if (!node.left) return this.minDepth(node.right) + 1;
    if (!node.right) return this.minDepth(node.left) + 1;

    return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth(node = this.root) {
    if (!node) return 0;

    const leftDepth = this.maxDepth(node.left);
    const rightDepth = this.maxDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    let maxSum = Number.MIN_SAFE_INTEGER;

    const dfs = (node) => {
      if (!node) return 0;

      const leftSum = Math.max(0, dfs(node.left));
      const rightSum = Math.max(0, dfs(node.right));

      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

      return node.val + Math.max(leftSum, rightSum);
    };

    dfs(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    let nextLargerValue = null;

    const dfs = (node) => {
      if (!node) return;

      if (node.val > lowerBound) {
        if (!nextLargerValue || node.val < nextLargerValue) {
          nextLargerValue = node.val;
        }
      }

      dfs(node.left);
      dfs(node.right);
    };

    dfs(this.root);
    return nextLargerValue;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
