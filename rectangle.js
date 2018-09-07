/**
 * 
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
 * @param {*} matrix 
 * 使用obj存储raw，colum，然后改变
 * 结果：未通过
 */
/* var setZeroes = function (matrix) {
    var obj = {
        colum: [],
        raw: []
    }
    obj.raw = [...matrix]
    var itemLen = matrix[0].length
    var len = matrix.length
    for (var i = 0; i < itemLen; i++) {
        obj.colum[i] = []
        for (var j = 0; j < len; j++) {
            obj.colum[i].push(matrix[j][i])
        }
    }
    //raw
    for (var i = 0; i < len; i++) {
        var item = obj.raw[i]
        if (item.indexOf(0) > -1) {
            for (var j = 0; j < itemLen; j++) {
                matrix[i][j] = 0
            }
        }
    }
//colum
    for (var i = 0; i < itemLen; i++) {
        var item = obj.colum[i]
        if (item.indexOf(0) > -1) {
            for (var j = 0; j < len; j++) {
                matrix[j][i] = 0
            }
        }
    }
    return matrix
}; */

/**
 * 第二种
 * 思路1  遍历整个数组，遇到0  就把整行和整列不为0 的值置为* ，然后再次遍历数组把* 换为0
 * 结果：未通过
 */
/* var setZeroes = function (matrix) {
    var len = matrix.length
    var itemLen = matrix[0].length
    if(len==0 || itemLen==0){
        return matrix
    }
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < itemLen; j++) {
            if(matrix[i][j]==0){
                for(var k=0;k< itemLen;k++){
                    if(matrix[i][k] !==0){
                        matrix[i][k]='*'
                    }
                }
                for(var k=0;k<len;k++){
                    if(matrix[k][j] !==0){
                        matrix[k][j]='*'
                    }
                }
            }
        }
    }
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < itemLen; j++) {
           if(matrix[i][j]==='*'){
            matrix[i][j] = 0
           }
        }
    }
return matrix
} */
/**
 * 第三种
 * 用第一行和第一列纪录需要为0的行数和列数(也可以使用两个数组存储行数和列数，是否为0（boolean）)
 * 结果：通过
 */
var setZeroes = function (matrix) {
    var rows = matrix.length();
    var cols = 0;
    if (rows != 0) {
        cols = matrix[0].length();
    }
    if (rows == 0 || cols == 0)
        return;
    var rowFlag = false;
    var colFlag = false;
    //判断第一行和第一列是否有 0 
    for (var i = 0; i < rows; i++) {
        if (matrix[i][0] == 0)
            colFlag = true;
    }
    for (var i = 0; i < cols; i++) {
        if (matrix[0][i] == 0)
            rowFlag = true;
    }

    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0; //用第一行和第一列记录 0 的行和列
                matrix[i][0] = 0;
            }
        }
    }
    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < cols; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    //最后处理第一行
    if (rowFlag) {
        for (var i = 0; i < cols; i++) {
            matrix[0][i] = 0;
        }
    }
    if (colFlag) {
        for (var i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

}
console.log(setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]))