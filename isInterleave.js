/**
 * 97. 交错字符串
 * 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。
 * 示例 1:

    输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
    输出: true
  * 示例 2:

    输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
    输出: false
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false
  }
  let f = []
  for (let i = 0; i <= s1.length; i++) {
    f[i] = []
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0 && j == 0) {
        f[0][0] = true
      }
      let p = i + j - 1;
      if (i > 0) {
        f[i][j] |= (f[i - 1][j] && s1[i - 1] == s3[p]);
      }
      if (j > 0) {
        f[i][j] |= (f[i][j - 1] && s2[j - 1] == s3[p]);
      }
    }
  }
  return !!f[s1.length][s2.length]
};
let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
console.log(isInterleave(s1, s2, s3))
