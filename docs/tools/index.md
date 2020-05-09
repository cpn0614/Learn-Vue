
# 方法总结
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

## 文字不换行
```css
.word {
  white-space: nowrap;
  // 文本溢出显示省略号
  text-overflow: ellipsis;
  // 溢出的部分隐藏
  overflow: hidden;
}
```

## 浏览器地址栏中文转码
```javascript
  decodeURIComponent(window.location.href.split('#')[1])//中文锚点
```

## 倒叙输出字符串
```javascript
  let str = 'abcdefg'
  let reverseStr = str.spilit('').reverse().join('')
```

## 数组去重
```javascript
  let arrs = [1,1,3,4,4]
  let arr = Array.from(new Set(arrs)) //[1,3,4]
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

## 如何使用express启动页面
假设index.html在根目录下view文件中，运行程序即可在http://localhost:3000中浏览index.html页面内容
```javascript
  const express = require("express")
  const http =  require('http')
  const app = express()
  app.use(express.static('./view'));
  http.createServer(app).listen(3000, 'localhost', function () {
    console.log("listening at http://localhost:3000");
  });
```

## 修改input placeholder属性样式的方法
```css
  input::-webkit-input-placeholder {
      /* placeholder颜色  */
      color: #aab2bd;
      /* placeholder字体大小  */
      font-size: 12px;
      /* placeholder位置  */
      text-align: right;
  }
  /* 兼容写法 */
  input::-webkit-input-placeholder { color:#f00; }
  input::-moz-placeholder { color:#f00; } /* firefox 19+ */
  input:-ms-input-placeholder { color:#f00; } /* ie */
  input:-moz-placeholder { color:#f00; }
```

## 使用nginx搭建NUXT项目
1. 安装node.js
2. 将npm、node 添加到全局：
   ```
   /usr/local/nodejs/bin/node /usr/local/bin/node
   /usr/local/nodejs/bin/npm /usr/local/bin/npm3.
   ```
3. 本地打包nuxt
4. 将.nuxt、server文件夹上传至服务器
5. 将nuxt.config.js、package.json上传至服务器
6. 进入文件目录 运行`npm install`
7. `npm start`    (start配置为：`cross-env NODE_ENV=production node server/index.js`)
8. 执行 `pm2 start npm -- start`
9. 按照
   官网:[https://zh.nuxtjs.org/faq/nginx-proxy]	"nginx代理"
   提供的nginx配置进行配置
   ```nginx
      map $sent_http_content_type $expires {
          "text/html"                 epoch;
          "text/html; charset=utf-8"  epoch;
          default                     off;
      }
   
      server {
          listen          80;             # the port nginx is listening on
          server_name     your-domain;    # 你的域名或ip
      
          gzip            on;
          gzip_types      text/plain application/xml text/css application/javascript;
          gzip_min_length 1000;
      
          location / {
              expires $expires;
      
              proxy_redirect                      off;
              proxy_set_header Host               $host;
              proxy_set_header X-Real-IP          $remote_addr;
              proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
              proxy_set_header X-Forwarded-Proto  $scheme;
              proxy_read_timeout          1m;
              proxy_connect_timeout       1m;
              proxy_pass                          http://127.0.0.1:3000; # server文件中 node服务器运行的地址
          }
      }
   ```

10. 重启nginx，即可访问nginx中配置的地址