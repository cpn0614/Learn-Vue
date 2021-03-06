function fibonacci(num) {
  let num = 1
  if (num < 1) {
    return
  } else if (num === 1 || num === 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// console.log(fibonacci(4))
//
var reversePairs = function(nums) {
  let total = 0
  // let last = -1
  let cache = {}
  let length = nums.length
  if(nums.length <= 1) return 0
  if(nums.length == 2 && nums[1]> nums[0]) return 1
  for(let i = 0; i < length - 1; i ++) {
      if (i > 0) nums.shift()
      let current = nums[0]
      if (current != 0) {
          if (Object.keys(cache).indexOf(current) > -1) {
              total += cache[current]
          } else {
              let sortnums = JSON.parse(JSON.stringify(nums))
              sortnums.sort((a, b) => b-a)
              const idx = sortnums.lastIndexOf(current)
              let result = nums.length - idx - 1
              cache[current] = result
              total += result
          }
      }
  }
  return total
};

// console.log(reversePairs([7,5, 6, 4]))

//移除元素
/**
 * 描述：
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
*/
var removeElement = function(nums, val) {
  let len = []
  for(let i = 0; i < nums.length; i++ ) {
      if (nums[i] == val) len.push(i)
  }
  for (let j = 0; j < len.length; j++) {
      nums.splice(len[j] - j, 1)
  }
  return nums
};

// console.log(removeElement([3,2,2,3], 3))


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


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0, str = ''
  if (s.length === 1) return 1
  s = s.split('')
  for (let i = 0; i < s.length; i ++) {
    const el = s[i]
    if (str.indexOf(el) < 0) str += el
    else {
      maxLength = maxLength < str.length ? str.length : maxLength
      str = str.substring(str.indexOf(el)+1) + el
    }
  }
  return maxLength = maxLength < str.length ? str.length : maxLength
};

// console.log(lengthOfLongestSubstring("pwwkew"))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let num = nums1.concat(nums2).sort((a, b) => a - b)
    let sortNum = num.length
    let res = sortNum / 2
    return sortNum % 2 === 0? (num[res - 1] + num[res]) / 2 : num[Math.floor(res)]
};

console.log(findMedianSortedArrays([1, 3], [2]))