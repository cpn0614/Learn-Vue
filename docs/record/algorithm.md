## 前言
很多人觉得前端算法不重要，只需要会js、css就行了。在我看来，算法培养的是解决问题的思路，灵活的使用方法能够大大的优化前端的效率。
算法记录主要是记录每天在leetcode上的完成的算法题。如果有更优解会在后面补充  
题目来源：力扣（LeetCode）
链接：[https://leetcode-cn.com/problems/remove-element](https://leetcode-cn.com/problems/remove-element)
著作权归领扣网络所有

## 移除元素
### 难度
简单

### 描述
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

### 解法
1. 先遍历找到重复数字的下标，加入数组。遍历下标数组，删除元素
   ```javascript
   var removeElement = function(nums, val) {
     let len = []
     for(let i = 0; i < nums.length; i++ ) {
      if (nums[i] == val) len.push(i)
     }
     for (let j = 0; j < len.length; j++) {
       //len[j] - j 是因为nums已经改变了，需要减去已经删除元素的个数
      nums.splice(len[j] - j, 1)
     }
     return nums
   };
   ```


## 数组中的逆序对
### 难度
困难

### 描述
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。  
输入: [7,5,6,4]  
输出: 5

### 解法
1. 这个解法因为超时没有通过。主要思路是遍历nums数组，抛出上一次的值，取第一个元素的值，将此时的数组从大到小排序，找出比当前值小的数的下标，算出后面剩余的值的个数计入total中，同时将当前数作为键，得到的值为value存入缓存对象中，遇到缓存中的值时直接取，不再进行排序等操作。
   ```javascript
   var reversePairs = function(nums) {
     let total = 0
     let cache = {}
     let length = nums.length
     if(nums.length <= 1) return 0
     if(nums.length == 2 && nums[1] > nums[0]) return 1
     for(let i = 0; i < length - 1; i ++) {
         if (i > 0) nums.shift() //抛出前一个值
         let current = nums[0]
         if (current != 0) {
             if (Object.keys(cache).indexOf(current) > -1) {
                 total += cache[current]
             } else {
                 let sortnums = JSON.parse(JSON.stringify(nums)) //深拷贝
                 sortnums.sort((a, b) => b-a) //排序
                 const idx = sortnums.lastIndexOf(current)
                 let result = nums.length - idx - 1
                 cache[current] = result
                 total += result
             }
         }
     }
     return total
   };
   ```




## 两数相加
### 难度
中等

### 描述
[leetcode题号](https://leetcode-cn.com/problems/add-two-numbers/): 2   
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

### 解法
1. 个人对链表只是简单的学习过，没有进行过完整的学习。对链表的算法也不是很了解，这个题让我进一步了解了链表的结构。参考了一下大神们的解法才完成了此题。
   主要思路是：创建哑结点（dummy node），目的是处理头结点为空的边界问题。遍历l1和l2，直到都不存在的时候停止遍历。每一位的和都等于l1.val + l2.val + add，add标识是否进位。需要处理l1和l2长度不一致的情况。将得到的和取10的余数，即为当前位的值，同时判断进位情况 赋值给add。
   ```javascript
   //该方法由题目提供
   function ListNode(val) {
     this.val = val;
     this.next = null;
   }

   /**
    * @param {ListNode} l1
    * @param {ListNode} l2
    * @return {ListNode}
    */
   var addTwoNumbers = function(l1, l2) {
     let node = new ListNode('head')
     let temp = node
     let add = 0
     let sum = 0
     while(l1 || l2) {
         sum = (l1 ? l1.val : 0) + (l2 ? l2.val: 0) + add
         temp.next = new ListNode(sum % 10)
         temp = temp.next
         add = sum >= 10 ? 1 : 0
         l1 && (l1 = l1.next)
         l2 && (l2 = l2.next)
     }
     add && (temp.next = new ListNode(add))
     return node.next
   };
   ```


## 删除链表的倒数第N个节点
### 难度
中等
### 描述
[leetcode题号](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/): 19   
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。(给定的 n 保证是有效的)   
示例：   
给定一个链表: 1->2->3->4->5, 和 n = 2.   
当删除了倒数第二个节点后，链表变为 1->2->3->5.

### 解法
1. 思路：先找到链表长度，再找到要删除的位置，将前一个节点的next指向下一个节点。特殊情况：链表长度为1，n=1，此时返回的为空；链表长度 === n，此时即删除第一个，返回head.next即可。   
   优化方案： 可以使用双向链表；使用哑结点避免删除第一个
  ```javascript
   /**
    * Definition for singly-linked list.
    * function ListNode(val) {
    *     this.val = val;
    *     this.next = null;
    * }
    */
   /**
    * @param {ListNode} head
    * @param {number} n
    * @return {ListNode}
    */
   var removeNthFromEnd = function(head, n) {
       let pre = null
       let nowVal = head, len = 0
       while (nowVal) {
           nowVal = nowVal.next
           len ++
       }
       let index = len - n
       nowVal = head
       if (len === 1 && n == 1) return head = null
       if (index === 0) return head = head.next
       while(index -- > 0) {
           pre = nowVal
           nowVal = nowVal.next
       }
       pre.next = nowVal.next
       return head
   };
  ```