const func = require('../util/func')
const Dep = require('./dep')
// const dep = new Dep()
class  Observer {
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    // 定义一个值表示该对象已经被监测了
    func.def(value, '_ob_', this)
    if (Array.isArray(value)) {
      // 判断是否为数组

    } else {
      this.talk(value)
    }
  }

  /**
   * 遍历obj的所有key值，将每个值都监听
   * @param {Object} obj 
   */
  talk(obj) {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      const element = keys[i];
      this.defineProperty(obj, element)
    }
  }

  /**
   * 读取或设置对象中的某个值
   * @param {Object} obj 
   * @param {String} key 
   * @param {*} val 
   */
  defineProperty(obj, key, val) {
    if (arguments.length === 2) {
      val = obj[key]
    }
    if (typeof val === "object") {
      new Observer(val)
    }
    // 存取描述符
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log('got it ' + val)
        dep.dependSub()
        return val
      },
      set(newValue) {
        if (val === newValue) {
          return
        }
        console.log('changed it ' + newValue)
        dep.notify()
        val = newValue
      }
    })
  }
}

module.exports = Observer