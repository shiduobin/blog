---
title: BFC（块级格式化上下文）
categories:
  - CSS
---

## 什么是 BFC

BFC（Block Formatting Context）块级格式化上下文，是 Web 页面中盒模型布局的 CSS 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

## 如何形成 BFC

- 浮动元素，float 不为 none；
- 绝对定位元素，positon 的值为 absolute 或者 fixed；
- display 的值是 inline-block、table-cell、flex、table-caption 或者 inline-flex；
- overflow 的值是 auto、scroll、hidden；

## BFC 的布局规则

- 内部的 box 会在垂直方向一个接一个放置
- box 在垂直方向上的距离由 margin 决定

* https://www.cnblogs.com/yuer20180726/p/11395982.html
* https://www.jianshu.com/p/828023418450
* https://zhuanlan.zhihu.com/p/127187654
* https://www.cnblogs.com/chen-cong/p/7862832.html
* https://blog.csdn.net/sinat_36422236/article/details/88763187
