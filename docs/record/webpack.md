# Webpack
## webpack初体验
### 必要性
作为一名合格的前端开发者，webpack是必备的知识。以前总是用vue-cli去搭建项目，webpack也都是配置好了的，自己也没留心去研究。好在及时发现，决定自己写一写。

### 初体验
初次体验的过程并不是很好，好在结果是还能接受。记录一下遇到的问题吧。
1. 首先是`npm install -g webpack`
2. 在config目录下新建了一个`webpack.config.js`的文件。文件的配置如下：
  ```javascript
      const path = require('path')
      module.exports = {
        entry: '../src/components/entry.js',
        output: {
          path: path.join(__dirname, '../dist'),
          filename: 'bundle.js'
        },
        resolve: {
          extensions: ['.js', '.jsx']
        },
        module: {
          rules: [
            { test: /\.js|jsx$/, loaders: ['babel-loader'] }
          ]
        }
      }
  ```
  -----------
  在此期间遇到了如下问题：
  - `ERROR in Entry module not found: Error: Can't resolve './src' in 'F:\myproject` 解决办法：进入到config文件中执行`webpack --watch`命令
  - `_dirname is not defined` 解决办法：这个错误真是蠢得令人发指，把`_dirname`改为`__dirname`即可
  - `Error: Cannot find module '@babel/core'` 解决办法：这个错误应该是这个包的版本低了 `npm un babel-core`、`npm i -D @babel/core`重新安装之后就可以了
到此，使用`webpack --watch`就已经能打包出bundle.js文件了。算是迈出了成功的一小步吧。

## 深入了解
### 四个核心概念
1. 入口（entry）
2. 输出（output）
3. loader
4. 插件（plugins)

### 入口（entry）
官方文档是这样介绍的
> 入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
这里我的理解就是入口文件。
1. 单个入口文件
  单个文件可以像`entry: '../src/entry.js'`这样简写，也可以写成下面这样：
  ```javascript
    entry: {
      main: '../src/entry.js'
    } 
  ```
2. 对象语法
   例如：
   1. 分离 应用程序(app) 和 第三方库(vendor) 入口时可以这样写
      ```javascript
       entry: {
         app: './src/app.js',
         venders: './src/venders'
       }
      ```
   2. 多页面应用程序可以这样写
      ```javascript
       entry: {
         pageone: './src/pageone.js',
         pagetwo: './src/pagetwo.js'
         ...
       }
      ```
      此时，如果按照以下写法，是会报错的`Multiple chunks emit assets to the same filename bundle.js`。这是由于输入的两个文件，输出的文件名相同了导致的。这时候只要将filename稍作修改即可，具体修改方式下一部分会写到。
      ```javascript
      const path = require('path')
      module.exports = {
        entry: {
          pageone: '../src/pageone.js',
          pagetwo: '../src/pagetwo.js'
        },
        output: {
          path: path.join(__dirname, '../dist'),
          filename: 'bundle.js'
        },
        resolve: {
          extensions: ['.js', '.jsx']
        },
        module: {
          rules: [
            { test: /\.js|jsx$/, loaders: ['babel-loader'] }
          ]
        }
      }
      ```

### 输出（output）
官方文档的介绍：
> 配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。
1. 配置包括两个参数：`filename, path`，顾名思义，就是配置文件名和输出的绝对路径。那么，当上一部分中多个输入的时候怎么办呢，文档中说可以用占位符来确保每个文件具有唯一的名称。
2. 占位符有`[name]`、`[id]`、`[hash]`、`[chunkhash]`、`[query]`几种，有什么区别呢
   |!--|
