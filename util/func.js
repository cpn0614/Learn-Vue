const func = {
  def(obj, key, value, enumerable) {
    // obj: Object, key: String, value: any, enumerable?: boolean
    // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
    // 数据描述符
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    })
  }
}

// export default _
module.exports = func