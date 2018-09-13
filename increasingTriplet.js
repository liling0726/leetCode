/**
 * 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。
    数学表达式如下:
    如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
    使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
    说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* var increasingTriplet = function (nums) {
    if (nums.length < 3) return false
    var arr = []
    for (var i = 0; i < nums.length; i++) {
        arr.push(1)
    }
    for (var i = 0; i < nums.length; i++) {
        for (var j =0; j < i; j++) {
            if(nums[j]<nums[i]){
                arr[i]++
                arr[i] = Math.max(arr[i], arr[j]+1);
                if(arr[i]==3){
                    return true
                }
            }
        }
    }
    return false
}; */
/**
 * 思路：利用最大值比较，如果m1大于当前值，则m1=当前置，否则m2大于当前值，m2等于当前值，否则就找到
 * @param {*} nums 
 */
/* var increasingTriplet = function (nums) {
    var m1= Number.MAX_VALUE
    var m2= Number.MAX_VALUE
    if(nums.length<3) return false
    for (var i = 0; i < nums.length; i++) {
        if(m1>=nums[i]) m1=nums[i]
        else if(m2>=nums[i]) m2=nums[i]
        else  return true
    }
    return false
} */

/**
 * 方法的虽然不满足常数空间的要求，但是作为对暴力搜索的优化
 * 建立两个数组，forward数组和backward数组，
 * 其中forward[i]表示[0, i]之间最小的数，
 * backward[i]表示[i, n-1]之间最大的数，
 * 那么对于任意一个位置i，如果满足 forward[i] < nums[i] < backward[i]，则表示这个递增三元子序列存在
 */
var increasingTriplet = function (nums) {
    var forward=[...nums],backward=[...nums]
    var n=nums.length
    for (var i = 1; i < n; ++i) {
        forward[i] = Math.min(forward[i - 1], nums[i]);
    }
    for (var i = n - 2; i >= 0; --i) {
        backward[i] =Math.max(backward[i + 1], nums[i]);
    }
    for (var i = 0; i < n; ++i) {
        if (nums[i] > forward[i] && nums[i] < backward[i]) return true;
    }
    return false;
}
console.log(increasingTriplet(
    [1,2,3,4,5]))