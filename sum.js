/**
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
    你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用
 */
/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = []
    var newSum 
    for(var i=0;i<nums.length;i++){
        newSum = target - nums[i]
        var index =nums.findIndex(function(item){
            return item === newSum
        }) 
        if(index>-1 && index !==i){
            arr[0] = i
            arr[1] = index
            return arr 
        }
    }
};
console.log(twoSum([3,2,4],6))