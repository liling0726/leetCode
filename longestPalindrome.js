/**
 * 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba"也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */

/**
 * 思路： Manacher算法
 * @param {string} s
 * @return {string}
 */
/* var longestPalindrome = function (s) {
    if (!s) return s
    var t = '#' + s.split('').join('#') + '#'
    var answer = 0
    // answer最大时的中心
    var index = 0
    var n = t.length
    var arr = []
    var rightIndex = 0,
        centerIndex = 0
    for (var i = 1; i < n; i++) {
        //当rightIndex > i，那么我们就在rightIndex - i 与len[2 * centerIndex - i](len[j])，取得最小值
        //因为当i + len[j] < rightIndex时，我们就把len[i]更新为len[j]
        //但是如果i + len[j] >= rightIndex时，我们暂且将len[i]定更新为rightIndex - i,超出的部分需要我们一个一个的匹配
        if (rightIndex > i) {
            if (!arr[2 * centerIndex - i]) {
                arr[2 * centerIndex - i] = 0
            }
            arr[i] = Math.min(rightIndex - i, arr[2 * centerIndex - i]);
        } else {
            arr[i] = 1;
        }
        //一个一个匹配
        //要么是超出的部分，要么是i > rightIndex
        while (i - arr[i] >= 0 && i + arr[i] < n && t[i - arr[i]] == t[i + arr[i]]) {
            arr[i]++;
        }
        // If palindrome centered at i expand past centerIndex,
        // adjust center based on expanded palindrome.
        if (i + arr[i] > rightIndex) {
            rightIndex = arr[i] + i;
            centerIndex = i;
        }
        if (arr[i] > answer) {
            answer = arr[i];
            index = i;
        }
    }
    return t.substring(index - answer + 1, index + answer).replace(/#/g, '');
};
 */
/**
 * 中心扩展算法
 */
/* var longestPalindrome = function (s) {
    if(!s) return ''
    var start = 0
    var end = 0
    if(s.length<2) return s
    function longestIndex(str,left,right){
        while(left>=0&&right<s.length&&s[left]===s[right]){
            left--
            right++
        }
        return {
            left:left,
            right:right
        }
    }
    for(var i=0;i<s.length-1;i++){
        var obj1=longestIndex(s,i,i)
        var obj2 = longestIndex(s,i,i+1)
        var obj = obj1.right-obj1.left > obj2.right-obj2.left ? obj1:obj2

        if(obj.right-obj.left-1>end-start){
            start = obj.left+1
            end = obj.right
        }
    }
    return s.substring(start,end)
} */
var longestPalindrome = function (s) {
    if(!s) return ''
    var start = 0
    var end = 0
    if(s.length<2) return s
    function longestIndex(str,left,right){
        while(left>=0&&right<s.length&&s[left]===s[right]){
            left--
            right++
        }
        console.log('a',left,right)
        return right-left-1
    }
    for(var i=0;i<s.length-1;i++){
        var len1=longestIndex(s,i,i)
        var len2 = longestIndex(s,i,i+1)
        var len = Math.max(len1,len2)

        if(len>end-start){
            //ceil是因为len2的时候，是以i和i+1为中心，所以len-2，但现在只减1，所以用ceil   
            start = Math.ceil(i-(len-1)/2)
            end = start+len
            console.log(start,end)
        }
    }
    return s.substring(start,end)
}
console.log(longestPalindrome('cbaab'))