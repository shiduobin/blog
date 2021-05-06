---
title: VUE 路由懒加载(按需加载)
categories:
  - VUE
img: https://pic3.zhimg.com/v2-3e416f3905705ec6be46c774d385b20d_1440w.jpg
---

## 为何需要懒加载

在我们打包构建应用时，如果项目体积很大时，构建后的 JavaScript 包会变得非常大，就会影响页面的加载。 如果我们能把不同的路由对应的组件分割成不同的代码块，然后当访问当前路由时再加载对应的组件，这样就会变得高效起来，大大提升了页面加载速度。

## 懒加载的方案

### 方案一、Vue 的异步组件技术，这种方法可以实现按需加载，并且一个组件会打包成一个 js 文件

```js
{
  path: '/userInfo',
  name: 'UserInfo',
  component: resolve => require(['../components/UserInfo'], resolve)
}
```

### 方案二、使用 webpack 提供的 require.ensure()

webpack 提供的 require.ensure()，方法可以实现按需加载，并且你可以将多个相同类的组件打包成一个文件，只要给他们指定相同的 chunkName 即可，如示例中的 user 将会打包成一个文件。

```js
{
     path: '/userInfo',
     name: 'UserInfo',
     component: r => require.ensure([], () => r(require('../components/UserInfo')), 'user')
},
{
     path: '/userDetail',
     name: 'UserDetail',
     component: r => require.ensure([], () => r(require('../components/UserDetail')), 'user')
}
```

### 方案三、使用 es6 的 import()，比较推荐的方案
