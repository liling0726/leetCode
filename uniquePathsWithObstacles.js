/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
* 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
* 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
* 网格中的障碍物和空位置分别用 1 和 0 来表示。
* 说明：m 和 n 的值均不超过 100。
*/
function uniquePathsWithObstacles(obstacleGrid) {
  let results = [];
  results[0]=1-obstacleGrid[0][0];
  
  for(let i = 0; i < obstacleGrid.length; i++){
      for(let j = 0; j < obstacleGrid[0].length; j++){
          if(obstacleGrid[i][j]==1){
              results[j]=0;
          }else if(j>=1){
            if(!results[j]){
              results[j]=0;
            }
            
              results[j]=results[j-1]+results[j];
          }
      }
      
  }
  return results[results.length-1];
}
const results = [
  [0,0,0,0],
  [0,1,0,0],
  [0,0,0,0]
]
console.log(uniquePathsWithObstacles(results))