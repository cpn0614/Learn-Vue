/**
 * 检查字符串中的``，将其转换为<code></code>标签
 * @param {String} str 
 */
function getCode(str) {
  let codes = str.match(/`.+?`/g)
  while(codes && codes.length >= 0) {
    let code = codes[0]
    str = str.split(code).join(`<code>${code.substring(1, code.length - 1)}</code>`)
    codes = str.match(/`.+?`/g)
  }
  return str
}

// console.log(getCode('abgfa`asf`d'))

/**
 * 快速排序
 * @param {Array} arr 
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let length = arr.length
  let point = arr[length - 1]
  let leftArr = rightArr = []
  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    element < point ? leftArr.push(element) : rightArr.push(element)
  }
  return quickSort(leftArr).concat(point, quickSort(rightArr))
}

// console.log(quickSort([1, 14, 21, 3 , 2 , 51, 34]))


function calDate(str) {
  let date = new Date(str.replace(/\u5E74|\u6708|\u65E5/g, ' '))
  let pre = 0
  pre = date.getDate() <= 16 ? date.getMonth() : date.getMonth() + 1
  return `${date.getFullYear()}年${pre}月16日 - ${date.getFullYear()}年${pre + 1}月16日`
}

function numJungle(str) {
  
  return str > 0 && (str.indexOf('.') > -1 && str.length - str.indexOf('.') <= 2)
}

function num(str) {
  return parseFloat(str).toFixed(4)
}

function toArray(arr) {
  let res = []; 
  for(let i = 0;i < arr.length;i ++){
    if(Array.isArray(arr[i])){
      res = res.concat(toArray(arr[i]));
    }else{
      res.push(arr[i]);
    } 
  } 
  return res; 
}

console.log(toArray([1,3,[5,7,[9]]]))
