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



