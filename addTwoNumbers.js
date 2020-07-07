/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* var addTwoNumbers = function(l1, l2) {
  function getNodeValue(listNode,arr){
    arr = arr || []
    arr.push(listNode.val)
    if(listNode.next){
      return getNodeValue(listNode.next,arr)
    }else{
      return + (arr.join(''))
    }
  }
  const value = getNodeValue(l1) + getNodeValue(l2)
  const newArr = value.toString().split('').reverse()
let newNode = next = {}
  for(let i=0;i<newArr.length;i++){
    next.val = newArr[i]
    next.next = i===newArr.length-1 ? null:{}
   
    next = next.next
  }
return newNode
};
const l1 = {
  val:1,
  next:{
    val:8,
    next:null
  }
}
const l2 = {
  val:0,
  next:null

}
console.log(l1)
addTwoNumbers(l1,l2) */
function ListNode(val){
  this.val=val
  this.next=null
}
var addTwoNumbers = function(l1, l2) {
  let c = 0
  let r = new ListNode()
  let p = r
  let p1 = l1, p2 = l2
  while(p1||p2||c) {
      c += ((p1&&p1.val)||0)+((p2&&p2.val)||0)
      let node = new ListNode(c%10)
      p.next = node
      c = parseInt(c/10)
      p1 && (p1 = p1.next)
      p2 && (p2 = p2.next)
      p = p.next
  }
  if(c){
    p.next=new ListNode(c)
  }
  return r.next
}