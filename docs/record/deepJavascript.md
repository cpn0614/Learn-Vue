## sort原理
   js数组提供的sort方法能够很方便的进行数据排序
### 语法
`arr.sort([compareFunction])`  
其中compareFunction是可选参数

### 示例
```javascript
  let arr1 = ['a', 'tom', 'marry', 'down']
  let arr2 = ['1', '97', '3', '34']
  let arr3 = [1, 97, 3, 34]
  // 当没有参数传入的时候，其排序顺序默认为，将待排序数据转换为字符串，并按照Unicode序列排序；
  arr1.sort() 
  // ["a", "down", "marry", "tom"]

  
  arr2.sort((a, b) => a - b)
  // ["1", "3", "34", "97"]
  arr2.sort((a, b) => b - a)
  // ["1", "97", "3", "34"]


  arr3.sort((a, b) => a - b)
  // [1, 3, 34, 97]
  arr3.sort((a, b) => b - a)
  // [97, 34, 3, 1]
```

### 原理
当数组长度小于等于10的时候，采用插入排序，大于10的时候，采用快排。  
对于长度大于1000的数组，采用的是快排与插入排序混合的方式进行排序的，因为，当数据量很小的时候，插入排序效率优于快排。  
1. 快速排序
   1. 在平均状况下，排序n个项目要O(nLogn)次比较。在最坏状况下则需要O(n^2)次比较，但这种状况并不常见。
   2. 步骤：
      1. 从数组中选择一个元素作为基准点
      2. 排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。
      3. 最后利用递归，将摆放在左边的数组和右边的数组在进行一次上述的1和2操作。
   3. 实现：
      ```javascript
      /**
      * 快速排序
      * @param {Array} arr 
      */
       function quickSort(arr) {
         if (arr.length <= 1) return arr
         // 当数组只剩一个数的时候结束递归
         let length = arr.length
         let point = arr[length - 1]
         // 挑选最后一个数作为基点
         let leftArr = rightArr = []
         for (let i = 0; i < arr.length - 1; i++) {
           const element = arr[i];
           // 将小于基点的数放到左数组,大于的放到右数组
           element < point ? leftArr.push(element) : rightArr.push(element)
         }
         // 将基点放到左右数组中间,左右数组进行递归
         return quickSort(leftArr).concat(point, quickSort(rightArr))
       }
      ```
2. 插入排序
   1. 从第一个元素开始，该元素可以认为已经被排序；
   2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
   3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
   4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
   5. 将新元素插入到该位置后；
   6. 重复步骤2~5。
   7. 实现：
      ```javascript
      function insertSort(arr) {
        if (arr.length === 0) return []
        if (arr.length === 1) return arr
        let sortArr = [arr[0]]
        for (let i = 1; i < arr.length; i ++) {
          let el = arr[i]
          for (let j = i; j > 0; j --) {
            let element = sortArr[j - 1]
            if (element >= el) {
              sortArr[j] = element
              if (j == 1) sortArr[0] = el
            }
            else {
              sortArr[j] = el
              break
            }
          }
        }
        return sortArr
      }
      ```