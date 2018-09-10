/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 示例:
输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var len=strs.length
    if(len==0) return strs
    var obj = {}
    var result = []
    for(var i =0;i<len;i++){
        var item = strs[i].split('').sort(function(a,b){
            return a>b
        }).join('')
        if(obj[item]){
            obj[item].push(strs[i])
        }else{
            obj[item] = [strs[i]]
        }
    }
    for(let i in obj){
        result.push(obj[i])
    }
    return result
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))