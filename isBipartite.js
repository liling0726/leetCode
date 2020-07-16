/**
 * https://leetcode-cn.com/problems/is-graph-bipartite/
 * 785. 判断二分图
 * 给定一个无向图graph，当这个图为二分图时返回true。
 * 如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。
 * graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。每个节点都是一个在0到graph.length-1之间的整数。这图中没有自环和平行边： graph[i] 中不存在i，并且graph[i]中没有重复的值。
 * 示例 1:
    输入: [[1,3], [0,2], [1,3], [0,2]]
    输出: true
    解释: 
    无向图如下:
    0----1
    |    |
    |    |
    3----2
    我们可以将节点分成两组: {0, 2} 和 {1, 3}。
  * 示例 2:
      输入: [[1,2,3], [0,2], [0,1,3], [0,2]]
      输出: false
      解释: 
      无向图如下:
      0----1
      | \  |
      |  \ |
      3----2
  * 我们不能将节点分割成两个独立的子集。
  * 注意:
  * graph 的长度范围为 [1, 100]。
  * graph[i] 中的元素的范围为 [0, graph.length - 1]
  * graph[i] 不会包含 i 或者有重复的值。
  * 图是无向的: 如果j 在 graph[i]里边, 那么 i 也会在 graph[j]里边
*/
/**
 *  解题思路
 * 我们任选一个节点开始，将其染成红色，并从该节点开始对整个无向图进行遍历；
 * 在遍历的过程中，如果我们通过节点 uu 遍历到了节点 vv（即 uu 和 vv 在图中有一条边直接相连），那么会有两种情况：
    * 如果 vv 未被染色，那么我们将其染成与 uu 不同的颜色，并对 vv 直接相连的节点进行遍历；
    * 如果 vv 被染色，并且颜色与 uu 相同，那么说明给定的无向图不是二分图。我们可以直接退出遍历并返回 \text{False}False 作为答案。
    * 遍历结束时，说明给定的无向图是二分图，返回True 作为答案。
*/
// 递归
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
/* var isBipartite = function (graph) {
  const UNCOLORED = 0
  const RED = 1
  const GREEN = 2
  let color = []
  for (let i = 0; i < graph.length; i++) {
    color.push(UNCOLORED)
  }
  let valid = true
  const dfs = (node, c, graph) => {
    color[node] = c;
    const cNei = c == RED ? GREEN : RED
    for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
        const index= graph[node][neighbor]
      if (color[index] == UNCOLORED) {
        dfs(index, cNei, graph);
        if (!valid) {
          return;
        }
      } else if (color[index] != cNei) {
        valid = false;
        return;
      }
    }
  }
  for (let i = 0; i < graph.length; i++) {

    if (color[i] == UNCOLORED) {
      dfs(i, RED, graph);
    }
  }
  return valid;
}; */

// 循环
var isBipartite = function (graph) {
  const UNCOLORED = 0
  const RED = 1
  const GREEN = 2
  let color = []
  for (let i = 0; i < graph.length; i++) {
    color.push(UNCOLORED)
  }

  for (let i = 0; i < graph.length; i++) {
    if (color[i] == UNCOLORED) {
      let queue = [];
      queue.push(i);
      color[i] = RED;
      while (queue.length) {
        let node = queue.pop();
        let cNei = color[node] == RED ? GREEN : RED;
        for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
          const index = graph[node][neighbor]
          if (color[index] == UNCOLORED) {
            color[index] = cNei
            queue.push(index)
          } else if (color[index] != cNei) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

let graph = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]
console.log(isBipartite(graph))

