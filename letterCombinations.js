/**电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */
/**
 * 回溯法
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return []
    var list = []
    var strings = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    function backtracking(s, digits, flag) {
        
        //如果已经遍历完所有输入的数字，说明已经到达底部，需要向上溯源。
        if (flag >= digits.length) {
            list.push(s); //到达底部说明已经是完整的一个结果，则将此次结果添加到结果集中
            return; //返回，向上回溯
        }

        var chars = strings[digits[flag]];
        for (var i = 0; i < chars.length; i++) { //遍历一个数字对应的所有字母

            backtracking(s + chars[i], digits, flag + 1, list); //将当前字符加到s上并将flag+1循环下一个数字的字母
        }
    }
    backtracking("",digits,0)
    return list
};
console.log(letterCombinations('23'))