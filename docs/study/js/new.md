---
title: Javascript 中 new 方法原生实现
categories:
  - JS
---

## new 的过程

我们通常使用 new 操作符来实例化一个对象，在创建实例化对象的过程中则会发生如下的操作：

1. 创建一个空的 javascript 对象就比如（即{}）;
2. 链接该对象（即设置该对象的构造函数）到另一个对象;
3. 将步骤 1 新创建的对象作为 this 的上下文；
4. 如果该函数有没有返回对象，没有则返回 this；

## 代码实现

基于上面的步骤，我们来实现代码

```js
function _new(fn, ...args) {
  // 实现步骤1和步骤2：即 1、let obj = {}; 2、obj.__proto__ = fn.prototype
  let obj = Object.create(fn.prototype);
  // 实现步骤3：将新创建的对象作为this的上下文
  let result = fn.apply(obj, args);
   // 实现步骤4：如果该函数没有返回对象（即 result 不是一个对象），则返回this（即 obj)
   return typeOf result === 'object' ? result : obj
}
```