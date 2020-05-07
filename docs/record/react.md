## 前言
作为前端，单单掌握vue是不够的，学习react是非常有必要的。

## 初入
萌生学习react的想法有两个原因：一是看到项目中用到jsx，同时在开发中对面向对象编程以及ts有了一定的兴趣。二是想换工作，看到很多公司有对react的需求。基于以上，我决定开始react的学习。
首先看了官网，发现对萌新不是很友好。就去网上找了一些博客，很多优秀的博客，就不一一举例了。我拜读了[http://huziketang.mangojuice.top/books/react/](http://huziketang.mangojuice.top/books/react/)的博客加深对react的学习，这里非常感谢该博客的作者[胡子大哈](https://www.zhihu.com/people/hu-zi-da-ha)。

## 开始
首先是快速构建项目。了解vue的都知道有例如`vue init webpack myproject`、`vue create myproject`的命令用以初始化（这里是用的vue-cli）。那么react该怎么快速初始化呢？

首先`npm install -g create-react-app`  
再使用`create-react-app hello-react`

通过以上，就可以快速构建项目了，当然前提是node环境。

## 速览


## 生命周期
1. `componentWillMount` 挂载前   
   render之前调用，一般将ajax请求、定时器启动放在这
2. `render` dom渲染
3. `componentDidMount` 挂载后   
   render之后调用
4. `componentWillUnmount` 删除
5. `componentWillUpdate` 组件从父组件接收到新的props之前调用
6. `componentDidUpdate` 组件开始渲染前调用
7. `shouldComponentUpdate(nextProps, nextState)` 控制组件是否重新渲染
8. `componentWillReceiveProps(nextProps)` 组件从父组件接收到新的props之前调用

## state 和 props
1. state是自有的，props是传入的  
2. props在当前组件无法修改，state可以通过setState方法修改，并且会dom会重新渲染。setState可以接收对象或函数，作为参数。 
   ```javascript
   //接受对象作为参数
   this.setState({
     isLiked: !this.state.isLiked
   })
   // 接受方法作为参数
   this.setState((prestate) => {
      return { count: prestate.count + 1 }
   })
   ```  
3. props通过` static defaultProps = { likedText: '取消' }` 设置默认值，state则通过：
   ```javascript
   constructor() {
    super()
    this.state = {
      isLiked: false
    }
   }
   ```

## jsx中的属性绑定
除class需要写成className，label的for属性需要写成htmlfor以外，都和原生js的属性绑定是一样的

## jsx中的方法绑定
on的事件监听只能放在html标签上，组件标签上没用效果   
同时 this不会指向方法中，而会打印出null或undefined，需要使用bind   
绑定方式类似于：  
```jsx
<p onClick={this.handleClick.bind(this)}>react是{isHelpful
 ? '有用的'
 : '没用的' //null会忽略该表达式插入 可以做到隐藏、显示某些元素
}</p>
```