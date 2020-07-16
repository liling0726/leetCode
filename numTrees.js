/**
 * https://leetcode-cn.com/problems/unique-binary-search-trees/
 * 96. 不同的二叉搜索树
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 示例:
  输入: 3
  输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {number}
 */
/* var numTrees = function(n) {
  let nums=[]
  nums[0]=nums[1]=1
  for(let i=2;i<=n;i++){
    nums[i]=0
    for(let j=0;j<i;j++){
      nums[i] += nums[j]*nums[i-j-1]
    }
  }
  return nums[n]
}; */

var numTrees = function(n) {
  let nums=[]
  nums[0]=nums[1]=1
  for(let i=2;i<=n;i++){
    
  }
  function total(i){
    if(i===1|| i===0){
      nums[0]=nums[1]=1
    }
    if(i===n+1){
      return
    }
    nums[i]=0
    for(let j=0;j<i;j++){
      nums[i] += nums[j]*nums[i-j-1]
    }
    return total(++i)
  }
  total(1)
  return nums[n]
};
console.log(numTrees(3))