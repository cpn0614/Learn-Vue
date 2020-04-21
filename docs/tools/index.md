# 工具总结

## JS方法总结
### RGB转16进制
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