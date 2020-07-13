/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * 350. 两个数组的交集 II
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例 1：
  输入：nums1 = [1,2,2,1], nums2 = [2,2]
  输出：[2,2]
  示例 2:

  输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出：[4,9]

  说明：
    输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
    我们可以不考虑输出结果的顺序。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let len1= nums1.length
  let len2 = nums2.length
  if(!len1 || !len2){
    return []
  }
    if(len1>len2){
      [nums2,nums1] = [nums1,nums2]
    }
    let arr =[]
    for(let i =0;i<nums1.length;i++){
      const index= nums2.indexOf(nums1[i])
      if(index>-1){
       nums2.splice(index,1)
        arr.push(nums1[i])
      }
    }
    return arr
};
let nums1 = [1,2,2,1],
 nums2 = [2,2]
console.log(intersect(nums1,nums2))