/**
 * 309. 最佳买卖股票时机含冷冻期
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 示例:
  输入: [1,2,3,0,2]
  输出: 3 
  解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
*/
/**具体解析：https://blog.csdn.net/J_learner/article/details/105949641
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
  if(prices.length == 0) {        
      return 0;    
  }    
  var dp = [], i = 0, j = 0;    
  for(i = 1; i < prices.length; i++) {    
    dp[i] = 0;     
      for(j = 0; j < i; j++) {            
          if(j == 0) {                
              dp[i] = Math.max(dp[i], prices[i] - prices[j]);                
              continue;            
          }            
          if(j == 1) {                
              dp[i] = Math.max(dp[i], prices[i] - prices[j] + dp[j], dp[j]);                
              continue;            
          }

          if(prices[j] > prices[j - 1]) {                
              dp[i] = Math.max(dp[i], dp[j] + prices[i] - prices[j], dp[j]);            
          }            
          else {                
              dp[i] = Math.max(dp[i], dp[j - 2] + prices[i] - prices[j], dp[j]);            
          }        
      }    
  }    
  return dp[prices.length - 1];
};
console.log(maxProfit([1,2,3,0,2]))