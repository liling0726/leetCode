/**
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。
 * 数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 * 示例:
    输入: [5,2,6,1]
    输出: [2,1,1,0] 
    解释:
    5 的右侧有 2 个更小的元素 (2 和 1).
    2 的右侧仅有 1 个更小的元素 (1).
    6 的右侧有 1 个更小的元素 (1).
    1 的右侧有 0 个更小的元素.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 超出时间限制
/* var countSmaller = function(nums) {
  let newNums=[]
  for(let i =0;i<nums.length;i++){
    newNums[i]=0
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]>nums[j]){
          newNums[i] = newNums[i] +1
        }
    }
  }
  return newNums
}; */

// 二分查找
var countSmaller = function(nums) {
  let len = nums.length
  if(len == 0) return nums
  // let counts = new Array(len)
  let sorted = []
  
  for(let i = len - 1; i >= 0; i--) {
    let low = 0 
    high = sorted.length-1
    let mid = 0
      while(low<high){
        mid = Math.floor((low + high)/2)
        if(sorted[mid]>=nums[i]){
          high = mid
        }else{
          low = mid+1
        }
      }
      let index = sorted[low] < nums[i] ? low+1 :low

      sorted.splice(index, 0, nums[i])
      nums[i] = index
  }
  return nums
}
console.log(countSmaller([1,2,7,8,5]))