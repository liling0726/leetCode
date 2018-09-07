/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 
 */
/**
 * 结果 ：未通过，超出限制
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort(function (a, b) {
        return a - b
    })
    var arr = []
    var lastValue = []
    var newSum
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return arr
        if(i>0 && nums[i-1]===nums[i]) continue
        var itemArr = []
        for (var j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] + nums[j] > 0) break
            newSum = -(nums[i] + nums[j])
            var index = nums.lastIndexOf(newSum)
            itemArr = [nums[i], nums[j], nums[index]]
            if (index > j && lastValue.indexOf(itemArr.join()) === -1) {
                lastValue.push(itemArr.join())
                arr.push(itemArr)
                itemArr = []
            }
        }

    }
    return arr
};


/**
 * 第二种方法
 * 结果：通过
 */
/* var threeSum = function (nums) {
    nums = nums.sort(function (a, b) {
        return a - b
    })
    var arr = []
    var len = nums.length
    var valueArr = []
    if(nums[0]>0) return []
    if(nums[len-1]===nums[0] && nums.length>2){//重复
        if(setArr[0]===0){
            return [[0,0,0]]
        }
        return []
    }
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i - 1] == nums[i]) continue
        var a = nums[i]
        if(a>0) return arr 
        var low = i + 1
        var high = len - 1
        while (low < high) {
            var b = nums[low]
            var c = nums[high]
            if ((a + b + c) == 0) {
                var value = '' + a + b
                if (valueArr.indexOf(value) == -1) {
                    arr.push([a, b, c])
                    valueArr.push(value)
                }

                while (low + 1 < high && nums[low] === nums[low + 1]) {
                    low++
                }
                while (low + 1 < high && nums[high] === nums[high - 1]) {
                    high--
                }
                low++
                high--
            } else if ((a + b + c) > 0) {
                while (low + 1 < high && nums[high] === nums[high - 1]) {
                    high--
                }
                high--
            } else {
                while (low + 1 < high && nums[low] === nums[low + 1]) {
                    low++
                }
                low++
            }
        }

    }
    return arr
}; */
console.log(threeSum([-1, 0, 1, 2, -1, -4]))