/**
 * 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。
 * 像句子"I reset the computer. It still didn’t boot!"
 * 已经变成了"iresetthecomputeritstilldidntboot"。
 * 在处理标点符号和大小写之前，你得先把它断成词语。
 * 当然了，你有一本厚厚的词典dictionary，
 * 不过，有些词没在词典里。假设文章用sentence表示，
 * 设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。
 * 注意：本题相对原题稍作改动，只需返回未识别的字符数
 * https://leetcode-cn.com/problems/re-space-lcci/
*/
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
	//创建一个数组存储未识别字符数量的数组
	let dp=[];
	dp[0]=0;
	//遍历sentence
	for(let i=1;i<=sentence.length;i++){
		dp[i]=dp[i-1]+1;//预设当前未识别字符串最少未前一个数+1
		//遍历字典，看看从sentence字符串的sentence[i]字符为结尾到sentence[0]是否有匹配的值
		for(let word of dictionary){
			//如果匹配
			if(word===sentence.substring(i - word.length, i)){
      // console.log(dp[i-word.length],dp[i],word)
      //取值dp[i]的时候,当这次是上次的子集，并且上次的d[i]<dp[i-word.length]
        dp[i]=Math.min(dp[i-word.length],dp[i]);
        
			}

		}

	}
	return dp[dp.length - 1];
};

let dictionary = ["vprkj","sqvuzjz","ptkrqrkussszzprkqrjrtzzvrkrrrskkrrursqdqpp","spqzqtrqs","rkktkruzsjkrzqq","rk","k","zkvdzqrzpkrukdqrqjzkrqrzzkkrr","pzpstvqzrzprqkkkd","jvutvjtktqvvdkzujkq","r","pspkr","tdkkktdsrkzpzpuzvszzzzdjj","zk","pqkjkzpvdpktzskdkvzjkkj","sr","zqjkzksvkvvrsjrjkkjkztrpuzrqrqvvpkutqkrrqpzu"]

let sentence = "rkktkruzsjkrzqqzkvdzqrzpkrukdqrqjzkrqrzzkkrr"

console.log(respace(dictionary,sentence))