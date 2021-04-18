---
title: 浏览器重绘（Repaint）和回流（Reflow）
categories:
  - CSS
---

## 什么是重绘

页面中的元素一部分属性发生改变，如外观、背景、颜色等不会引起布局变化的，浏览器只需要将信样式赋予元素并重新绘制它，这个过程称之为重绘。

#### 会引起重绘的属性

| 引起重绘的属性  |                  |                    |                   |
| --------------- | ---------------- | ------------------ | ----------------- |
| color           | border-color     | visibility         | background        |
| text-decoration | background-image | background-positon | background-repeat |
| outline         | outline-color    | outline-style      | outline-width     |
| border-radius   | box-shadow       | background-size    |                   |

## 什么是回流

当渲染树（render 树）中的一部分或者全部因为几何属性发生改变，如宽度、高度、内外边距等发生改变，浏览器需要重新渲染部分文档或者全部文档的过程称之为回流。

#### 会引起回流的操作、属性以及方法

| 引起回流的操作 |                      |                    |                                              |
| -------------- | -------------------- | ------------------ | -------------------------------------------- |
| 页面首次渲染   | 元素字体大小改变     | 浏览器窗口发生改变 | 元素的尺寸发生改变(内外边距、边框大小、宽高) |
| 内容改变       | 添加或删除可见的 DOM | 激活伪类           |                                              |

| 引起回流的属性        |                 |              |                       |
| --------------------- | --------------- | ------------ | --------------------- |
| width                 | height          | padding      | margin                |
| diaplay               | font-size       | font-weight  | border                |
| line-height           | vertical-aligin | white-space  | overflow              |
| float                 | text-aligin     | position     | clear                 |
| clientWidth           | clientHeight    | clientHeight | clientTop             |
| clientLeftoffsetWidth | offsetHeight    | offsetTop    | offsetLeftscrollWidth |
| scrollHeight          | scrollTop       |              |                       |

| 引起回流的方法             |                          |                    |                         |            |
| -------------------------- | ------------------------ | ------------------ | ----------------------- | ---------- |
| scrollLeftscrollIntoView() | scrollIntoViewIfNeeded() | getComputedStyle() | getBoundingClientRect() | scrollTo() |

**注意：回流一定会触发重绘，而重绘不一定会回流**
