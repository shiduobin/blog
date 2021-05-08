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
const router = new VueRouter({
  routes: [
    {
      path: "/userInfo",
      name: "UserInfo",
      component: (resolve) => require(["../components/UserInfo"], resolve),
    },
  ],
});
```

### 方案二、使用 webpack 提供的 require.ensure()

webpack 提供的 require.ensure()，方法可以实现按需加载，并且你可以将多个相同类的组件打包成一个文件，只要给他们指定相同的 chunkName 即可，如示例中的 user 将会打包成一个文件。

```js
const router = new VueRouter({
  routes: [
    {
      path: "/userInfo",
      name: "UserInfo",
      component: (r) =>
        require.ensure([], () => r(require("../components/UserInfo")), "user"),
    },
    {
      path: "/userMsg",
      name: "UserMsg",
      component: (r) =>
        require.ensure([], () => r(require("../components/UserMsg")), "user"),
    },
  ],
});
```

### 方案三、使用 es6 的 import()，比较推荐的方案

结合 Vue 的[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)和 Webpack 的[代码分割功能](https://webpack.docschina.org/api/module-methods/#magic-comments)，轻松实现路由组件的懒加载。

如下，每个组件将会打包成一个 js 文件

```js
const userInfo = () => import("../components/UserInfo");
const userMsg = () => import("./components/UserMsg");
const router = new VueRouter({
  routes: [
    {
      path: "/userInfo",
      name: "UserInfo",
      component: userInfo,
    },
    {
      path: "/userMsg",
      name: "UserMsg",
      component: userMsg,
    },
  ],
});
```

有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 [命名 chunk](https://webpack.js.org/guides/code-splitting/)，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

```js
const userInfo = () =>
  import(/* webpackChunkName: "user" */ "../components/UserInfo");
const userMsg = () =>
  import(/* webpackChunkName: "user" */ "./components/UserMsg");
const router = new VueRouter({
  routes: [
    {
      path: "/userInfo",
      name: "UserInfo",
      component: userInfo,
    },
    {
      path: "/userMsg",
      name: "UserMsg",
      component: userMsg,
    },
  ],
});
```

此时，Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。
