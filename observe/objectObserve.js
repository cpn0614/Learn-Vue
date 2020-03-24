const func = require('../util/func')
class  Observer {
  constructor(value) {
    this.value = value
    func.def(value, '_ob_', this)
    if (Array.isArray(value)) {

    } else {
      this.talk(value)
    }
  }

  talk(obj) {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      const element = keys[i];
      this.defineProperty(obj, element)
    }
  }

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
        return val
      },
      set(newValue) {
        if (val === newValue) {
          return
        }
        console.log('changed it ' + newValue)
        val = newValue
      }
    })
  }
}

module.exports = Observer