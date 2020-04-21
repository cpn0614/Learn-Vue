class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  removeSub(sub) {
    if (this.subs.length) {
      let subIndex = this.subs.indexOf(sub)
      if (subIndex > -1)
        this.subs.splice(subIndex, 1)
    }
  }

  dependSub() {
    if (window.target) {
      this.addSub(window.target)
    }
  }

  /**
   * 通知更新
   */
  notify() {
    const subs = this.subs.slice()
    for (let i = 0; i < subs.length; i++) {
      const element = subs[i];
      // element.update()
    }
  }
}