/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 例如，给定三角形：
    [
        [2],
        [3,4],
      [6,5,7],
      [4,1,8,3]
    ]
* 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）
* 说明：
* 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let f = [];
  f[0]=[]
  f[0][0] = triangle[0][0];
  for (let i = 1; i < n; ++i) {
    if(!f[i]){
      f[i]=[]
    }
    if(!f[i - 1][0]){
      f[i - 1][0]=0
    }
      f[i][0] = f[i - 1][0] + triangle[i][0];
      for (let j = 1; j < i; ++j) {
          f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + triangle[i][j];
      }
      f[i][i] = f[i - 1][i - 1] + triangle[i][i];
  }
  let mletotal = f[n - 1][0];
  for (let i = 1; i < n; ++i) {
      mletotal = Math.min(mletotal, f[n - 1][i]);
  }
  return mletotal;
};
const triangle = [
  [2],
  [3,4],
[6,5,7],
[4,1,8,3]
]
console.log(minimumTotal(triangle))