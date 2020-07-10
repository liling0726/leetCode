/**
 * 寻找两个正序数组的中位数
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 示例 1:
    nums1 = [1, 3]
    nums2 = [2]
    则中位数是 2.0
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 让2数组的长度永远比1数组要长，保证奇数情况数组在nums2中
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  
  const length1 = nums1.length;
  const length2 = nums2.length;
  let min = 0;
  let max = length1;
  let half = Math.floor((length1 + length2 + 1) / 2);
  while (max >= min) {
      const i = Math.floor((max + min) / 2); //数组1的分界
      const j = half - i; //数组2的分界
      console.log('i:',i,'j:',j,nums1[i - 1],nums2[j])
      // 1数组被分开后的较小部分的最大值大于2数组被分开后较大部分的最小值
      if (i > min && nums1[i - 1] > nums2[j]) {
          max = i - 1; 
      } else if (i < max && nums1[i] < nums2[j - 1]) {
        // 1数组被分开后的较大部分的最小值小于2数组被分开后较小部分的最大值
          min = i + 1;
      } else {
          let left,right;
          if (i === 0) left = nums2[j - 1]; //1数组所有的值都大于等于2数组较小部分的最大值，中位数左边界肯定在2数组内，且位置是 (length1+length2)/2 - length1也即是j-1，较小部分的最大值
          else if (j === 0) left = nums1[i - 1]; //2数组所有的值都大于等于1数组较小部分的最大值，中位数左边界肯定在1数组内，较大部分的最小值
          else left = Math.max(nums1[i - 1], nums2[j - 1]); //都不是的话，左边界是1数组和2数组的较小值里面的最大值
          
          if (i === length1) right = nums2[j]; //1数组的所有值都小于等于2数组较大部分的最小值，右边界在2数组较大值部分的最小值
          else if (j === length2) right = nums1[i]; //2数组的所有值都小于等于1数组较大部分的最小值，右边界在1数组叫大部分的最小值
          else right = Math.min(nums1[i], nums2[j]); //都不是的话，右边界是1数组和2数组的较小值里面的最小值
          
          return (length1 + length2) % 2 ? left : (left + right) / 2; //返回中位数
      }
  }
  return 0;
};
const nums1 = [1,2,3,4,5]
const nums2 = [1,4,6,7]
console.log(findMedianSortedArrays(nums1,nums2))