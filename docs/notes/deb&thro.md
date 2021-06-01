---
title: 函数防抖与函数节流
categories:
  - JS
tags:
  - 随记
---

## 为什么需要函数防抖和函数节流

我们有时候会监听浏览器的 resize、scroll，鼠标的 mousemove、mouseover，输入框的 input、keypress 等事件，然后为它们绑定一些回调函数，但这些操作会导致回调事件的连续触发，倘若此时我们在回调事件中绑定了一些 DOM 的操作，此时会很消耗浏览器性能，而且有时候我们并不关心中间过程触发的事件，所以为了优化体验，需要对这类事件进行调用次数的限制，因此有了函数节流和函数防抖。

## 什么是函数节流

当一个事件被连续触发多次，通过函数节流可以确保函数在一定时间内只执行一次。

### 函数节流的实现

#### 方法一：时间戳版

```js
function throttle(fn, delay, scope) {
  let prev = Date.now();
  return function() {
    const context = scope || this;
    const args = arguments;
    const now = Date.now();
    if (now - prev > delay) {
      prev = now;
      fn.apply(context, args);
    }
  };
}
```

#### 方法二：定时器版

```js
function throttle2(fn, delay, scope) {
  let timer;
  return function() {
    const context = scope || this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}
```

## 什么是函数防抖

当一个事件被连续触发多次，则会在指定延时间隔后执行回调函数，如果在时间间隔内又触发事件，则重新计算延时时间，即只执行最后触发的一次。

### 函数防抖的实现

```js
function debounce(fn, delay, scope) {
  let timer = null;
  // 返回函数对 debounce 作用域形成闭包
  return function() {
    // setTimeout() 中用到函数环境总是 window ,故需要当前环境的副本；
    let context = scope || this,
      args = arguments;
    // 如果事件被触发，清除 timer 并重新开始计时
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
```

## 各自的应用场景

| 类型     | 场景                                                                                                                                                                                                                                                                                                                          |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 函数防抖 | 1. 手机号、邮箱输入检测<br/>2. 搜索框搜索输入（只需最后一次输入完后，再放松 Ajax 请求）<br/>3. 窗口大小 resize（只需窗口调整完成后，计算窗口大小，防止重复渲染）<br/>4. 滚动事件 scroll（只需执行触发的最后一次滚动事件的处理程序）<br/>5. 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，（停止输入后）验证一次就好） |
| 函数节流 | 1. DOM 元素的拖拽功能实现（mousemove）<br/>2. 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）<br/>3. 计算鼠标移动的距离（mousemove）<br/>4. 搜索联想（keyup）<br/>5. 滚动事件 scroll，（只要页面滚动就会间隔一段时间判断一次）                                                                                  |
