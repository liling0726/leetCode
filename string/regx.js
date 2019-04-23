/**
 * 正则表达式匹配
 * https://leetcode-cn.com/problems/regular-expression-matching/
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 *'  .' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const re = new RegExp(p)
    const res = s.match(p)
    if (res == null) return false;
    if (res[0] === s) {
        return true;
    } else {
        return false;
    }
};
/* console.log(isMatch('aa','a'))
console.log(isMatch('aab','c*a*b'))
console.log(isMatch('aa','a*'))
console.log(isMatch('ab','.*'))
console.log(isMatch('mississippi','mis*is*p*.')) */
console.log(isMatch('abcd','d*'))