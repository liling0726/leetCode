/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 输入: "abcabcbb"
输出: 3 
解释: 无重复字符的最长子串是 "abc"，其长度为 3
 */
var lengthOfLongestSubstring = function (s) {
    var arr = s.split('')
    var obj = {}
    var resultLength = 0
    var newResult = []
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i]
        if (obj[item]) {
            
            if (newResult.length > resultLength) {
                resultLength = newResult.length
            }
            var sameCharIndex = newResult.indexOf(item)
            for(var j=0;j<sameCharIndex+1;j++){
                delete obj[newResult[j]]
            }
            newResult =  newResult.slice(sameCharIndex+1)
        }
        obj[item]=true
        newResult.push(item)
    }
    if (newResult.length > resultLength) {
        resultLength = newResult.length
    }
    return resultLength
};
console.log(lengthOfLongestSubstring('aabaab!bb'))