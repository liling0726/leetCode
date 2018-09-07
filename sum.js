/**
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