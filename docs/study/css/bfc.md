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

- 内部的盒子会在垂直方向一个接一个放置；
- 盒子在垂直方向上的距离由 margin 决定，属于同一个 BFC 的盒子的 margin 会重叠；
- 在 BFC 中每一盒子的左边缘和父容器的左边缘内部重叠，即在没有 margin 和 padding 的情况下，父 border 的内边和子 border 的内边重叠；
- BFC 的区域不会和 float 元素区域产生重叠；
- BFC 是页面上的一个独立容器不会，容器内部的元素不会影响外部，反之亦然；
- 计算 BFC 的高度时，浮动子元素也参与计算；

## BFC 的作用

### 1、解决高度塌陷的问题

问题：当子元素存在浮动元素时，父元素会发生高度塌陷的问题  
办法：父元素添加 `overflow:hidden` 属性，开启 BFC  
原理：计算 BFC 的高度时，浮动子元素也参与计算

### 2、解决非浮动元素被浮动元素覆盖的问题

问题：当同级的元素存在浮动时，回覆盖在非浮动元素上面  
办法：给非浮动元素添加 `overflow:hidden` 属性，开启 BFC  
原理：BFC 的区域不会和浮动元素区域产生重叠

### 3、解决 margin 重叠的问题

问题：当两个盒子在一起有相邻的外边距时，会取外边距较大的那一个，也就是外边距会合并
办法：给任意一个盒子添加包裹一个新的盒子，添加 `overflow:hidden` 属性，开启 BFC  
原理：属于同一个 BFC 的两个相邻的 盒子 的 margin 会发生重叠

## 参考
[BFC 官方文档](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
