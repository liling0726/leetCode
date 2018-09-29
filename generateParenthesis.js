/**
 * 生成括号
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var arr=[]
    helper(n, n, "");
    function helper(left,right,out){
        console.log(left,right)
        if (left < 0 || right < 0 || left > right) return;
        if (left == 0 && right == 0) {
            arr.push(out);
            return;
        }
        helper(left - 1, right, out + "(");
        helper(left, right - 1, out + ")");
    }
    return arr
};
console.log(generateParenthesis(3))