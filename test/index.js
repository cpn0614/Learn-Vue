// import Observer from '../observe/objectObserve.js'
const Observer = require('../observe/objectObserve')
let obj = {
  name: 'zhangsan',
  age: 19
}
let observer = new Observer(obj)
console.log(observer.value.name)