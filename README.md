# vue-shop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 插件

滚动加载

## node 接口步骤

1. 创建数据结构 server/models/users.js
2. 创建路由 server/roures/goods.js 对数据库进行增删改查，并输出
3. 取消 /build/webpack.dev.conf.js 中的假数据模拟， 配置 config/index.js 中的代理转发
4. 前端axios发起请求
5. 拿到数据，处理数据

npm install vue-infinite-scroll --save

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
