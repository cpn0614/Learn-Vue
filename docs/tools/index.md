
# JS方法总结
## RGB转16进制
```javascript
function colorRGBToHex(color){
  let rgb = color.split(",")
  let r = parseInt(rgb[0].split('(')[1])
  let g = parseInt(rgb[1])
  let b = parseInt(rgb[2].split(')')[0])
  let hex = [r.toString(16), g.toString(16), b.toString(16)]
  return '#' + hex.join('')
}
```

## 复制到剪贴板
```javaScript
function copyToClipboard(str) {
  let save = function(e) {
    e.clipboardData.setData('text/plain', str)
    e.preventDefault()
  }
  document.addEventListener('copy', save);
  document.execCommand('copy');
  document.removeEventListener('copy', save);
  // Message.success('已复制到剪贴板');
}
```

## 时间处理
```javaScript
new Date().toLocaleDateString() //2019/8/20
new Date().toLocaleString('zh-CN', {hour12: false}) //2019/8/20 10:46:45
```

## 多数组转一维
```javascript
function toOneArray(arr) {
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
console.log(toOneArray([1,3,[5,7,[9]]])) // [1, 3, 5, 7, 9]
```


