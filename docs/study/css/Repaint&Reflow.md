---
title: 浏览器重绘（Repaint）和回流（Reflow）
categories:
  - CSS
img: https://jc.chazidian.com/Images/jiaocheng/2015-05-0713/1176873911.jpg
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

## 什么是回流(重排)

当渲染树（render 树）中的一部分或者全部因为几何属性发生改变，如宽度、高度、内外边距等发生改变，浏览器需要重新渲染部分文档或者全部文档的过程称之为回流。

**注意：回流一定会触发重绘，而重绘不一定会回流**

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

| 引起回流的方法           |                        |                  |                       |          |
| ------------------------ | ---------------------- | ---------------- | --------------------- | -------- |
| scrollLeftscrollIntoView | scrollIntoViewIfNeeded | getComputedStyle | getBoundingClientRect | scrollTo |

## 如何减少重绘(Repaint)和回流(Reflow)

#### 1. 批量修改 DOM 或者样式

修改样式：

```js
const el = document.getElementById("test");
el.style.padding = "5px";
el.style.borderLeft = "1px";
el.style.borderRight = "2px";
```

这个例子中对 DOM 的三次操作都引发了布局的更改，因此就会导致三次重排。
因此我们可以合并所有的更改，然后一次性处理：

- 使用 cssText 统一处理

```js
const el = document.getElementById("test");
el.style.cssText += "border-left: 1px; border-right: 2px; padding: 5px;";
```

- 直接修改 css 的 class

```js
const el = document.getElementById("test");
el.className += " active";
```

修改 DOM

```js
// 优化前
function appendDataToElement(appendToElement, data) {
  let li;
  for (let i = 0; i < data.length; i++) {
    li = document.createElement("li");
    li.textContent = "text";
    appendToElement.appendChild(li);
  }
}
const ul = document.getElementById("list");
appendDataToElement(ul, data);
```

如上这种循环插入 DOM 会导致多次回流。因此我们可以通过 [createDocumentFragment()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment) 创建一个虚拟节点，进行操作后直接插入:

```js
// 优化后
const ul = document.getElementById("list");
const fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
ul.appendChild(fragment);
```

#### 2. 避免触发同步 UI 渲染

当我们获取节点（元素）布局信息的属性时，会引起浏览器的强制回流或重绘，也就是在同步中进行回流重绘，所以我们也需要减少对这类属性的使用。

例如：

```js
function initP() {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.width = box.offsetWidth + "px";
  }
}
```

这段代码在每次循环的时候，都读取了 box 的一个 offsetWidth 属性值，然后利用它来更新 p 标签的 width 属性。这就导致了每一次循环的时候，浏览器都必须先使上一次循环中的样式更新操作生效，才能响应本次循环的样式读取操作。每一次循环都会强制浏览器刷新队列。我们可以优化为:

```js
const width = box.offsetWidth;
function initP() {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.width = width + "px";
  }
}
```

#### 3. 对于复杂动画效果,使用绝对定位让其脱离文档流

对于复杂动画效果，由于会经常的引起回流重绘，因此，我们可以使用绝对定位，让它脱离文档流。否则会引起父元素以及后续元素频繁的回流。

#### 4. css3 硬件加速（GPU 加速）

使用 css3 硬件加速，可以让 transform、opacity、filters 这些动画不会引起回流重绘 。

常见的触发硬件加速的 css 属性：

- transform
- opacity
- filters
- Will-change

::: warning 注意
1、如果你为太多元素使用 css3 硬件加速，会导致内存占用较大，会有性能问题。  
2、GPU 渲染会影响字体的抗锯齿效果。这是因为 GPU 和 CPU 具有不同的渲染机制，即使最终硬件加速停止了，文本还是会在动画期间显示得很模糊。
:::

## 总结

1. 触发回流的原因主要是 DOM 节点大小或位置的改变引起的。
2. 重绘则是表面的视觉效果的改变引起的。
3. 回流就必定会触发重绘, 而触发重绘不一定会触发回流。
4. 通过了解回流和重绘的特点，从代码层面优化，减少页面中回流的操作，从而提高页面性能。
