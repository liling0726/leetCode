/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 *            5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
* 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5.4.11.2。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
/**
 * 广度优先
 * 首先我们可以想到使用广度优先搜索的方式，记录从根节点到当前节点的路径和，以防止重复计算。
* 这样我们使用两个队列，分别存储将要遍历的节点，以及根节点到这些节点的路径和即可。
 * @param {*} root 
 * @param {*} sum 
 */
var hasPathSum = function(root, sum) {
  if (root == null) {
    return false;
}
let queNode = []
let queVal = [];
queNode.push(root);
queVal.push(root.val);
while (queNode.length) {
   let now = queNode.pop();
    let temp = queVal.pop();
    if (now.left == null && now.right == null) {
        if (temp == sum) {
            return true;
        }
        continue;
    }
    if (now.left != null) {
        queNode.push(now.left);
        queVal.push(now.left.val + temp);
    }
    if (now.right != null) {
        queNode.push(now.right);
        queVal.push(now.right.val + temp);
    }
}
return false;
}

/**
 * 递归
 * 我们可以归纳出它的功能：询问是否存在从当前节点 root 到叶子节点的路径，满足其路径和为 sum。
 * 假定从根节点到当前节点的值之和为 val，我们可以将这个大问题转化为一个小问题：是否存在从当前节点的子节点到叶子的路径，满足其路径和为 sum - val。
 * 若当前节点就是叶子节点，那么我们直接判断 sum 是否等于 val 即可（因为路径和已经确定，就是当前节点的值，我们只需要判断该路径和是否满足条件）。若当前节点不是叶子节点，我们只需要递归地询问它的子节点是否能满足条件即可

*/
/* var hasPathSum = function(root, sum) {
  if (root == null) {
    return false;
}
if (root.left == null && root.right == null) {
    return sum == root.val;
}
return hasPathSum(root.left, sum - root.val) ||
       hasPathSum(root.right, sum - root.val);
} */

const data = {
  val:5,
  left:{
    val:4,
    left:{
      val:11,
      left:{
        val:7,
        left:null,
        right:null
      },
      right:{
        val:2,
        left:null,
        right:null
      }
    },
    right:null
  },
  right:{
    val:8,
    left:{
      val:13,
      right:null,
      left:null
    },
    right:{
      val:4,
      left:null,
      right:{
        val:1,
        left:null,
        right:null
      }
    }
  }
}
console.log(hasPathSum(data,22))