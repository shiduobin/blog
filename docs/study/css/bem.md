---
title: CSS命名规范—BEM
categories:
  - CSS
---

## 什么是 BEM

BEM 是一种前端命名方法论，主要是针对 CSS，意思是块（Block）、元素（Element）、修饰符（Modifier）的简写。这种命名方法让 CSS 便于统一团队开发规范和方便维护。

BEM 规定是块和元素之间用"\_\_"连接，元素和修饰符之间用"--"连接。

命名模式如下：
`.块__元素--修饰符{}`

- `block 代表了更高级别的抽象或组件`
- `block__element 代表 block 的后代，用于形成一个完整的 block 的整体`
- `block--modifier 代表 block 的不同状态或不同版本`

## BEM 命名法的好处

BEM 的关键是，可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。于是，通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。

## 什么时候应该用 BEM 格式

使用 BEM 的诀窍是，你要知道什么时候哪些东西是应该写成 BEM 格式的。并不是每个地方都应该使用 BEM 命名方式。当需要明确关联性的模块关系时，应当使用 BEM 格式。比如下面，只是一条公共的单独的样式，就没有使用 BEM 格式的意义。

```css
.hide {
  display: none !important;
}
```

## 在 CSS 预处理器中使用 BEM 格式

BEM 的一个槽点是，命名方式长而难看，书写不雅。相比 BEM 格式带来的便利来说，我们应客观看待。而且，一般来说会使用通过 LESS/SASS 等预处理器语言来编写 CSS，利用其语言特性书写起来要简单很多。

以 LESS 为例：

```css
　.article {
  max-width: 1200px;
  &__body {
    padding: 20px;
  }
  &__button {
    padding: 5px 8px;
    &--primary {
      background: blue;
    }
    &--success {
      background: green;
    }
  }
}
```

## 结束语

所以，BEM（或 BEM 的变体）是一个非常有用、强大、简单的命名约定，以至于让你的前端代码更容易阅读和理解，更容易协作、更容易控制、更加健壮和明确而且更加严密。
尽管 BEM 看上去多少有点奇怪，但是无论什么项目，它对前端开发者都是一个巨有价值的工具。
