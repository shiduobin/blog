---
title: CSS 元素垂直居中的常用方法
categories:
  - CSS
img: https://jc.chazidian.com/Images/jiaocheng/2015-05-0713/1176873911.jpg
---

## 固定宽高

### absolute + 负 margin

实现原理：先 absolute 设置 50%，然后负 margin 元素本身的一半宽高。

```css
.demo {
    position: relative;
}
.vc1 {
    width:200px;
    height:200px;
    background-color: red;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-100px;
    margin-left:-100px;
}

<div class="demo">
    <div class="vc1"></div>
</div>
```

### absolute + calc

实现原理：先 absolute，然后 top/left 的值通过计算属性 calc 设置（50%-宽高/2）。

```css
.demo {
    position: relative;
}
.vc3 {
    width:200px;
    height:200px;
    background-color: red;
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
}

<div class="demo">
    <div class="vc3"></div>
</div>
```

## 自适应

### absolute + transform

实现原理：先 absolute，然后 top/left 设置为 50%，再利用 translate 位移拉回自身宽高的 50%。

```css
.demo {
    position: relative;
}
.vc4 {
    background-color: blue;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}

<div class="demo">
    <div class="vc4"></div>
</div>
```

### absolute + margin auto

实现原理：先 absolute 四个方向设置为 0，然后设置 margin 为 auto。

```css
.demo {
    position: relative;
}
.vc1 {
    width:200px;
    height:200px;
    background-color: red;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

<div class="demo">
    <div class="vc1"></div>
</div>
```

### css-table

实现原理：利用 css 的方式，将 div 的 display 转成 table-cell，就可以模拟 td 的特性，（最外层 style 只是为了设置外层宽度方便查看可忽略）

```css
.demo8 {
    height: 500px;
    border:1px solid #ccc;
    color: #fff;
    box-sizing: border-box;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.vc8 {
    display: inline-block;
    background-color: blue;
}

<div style="display:table;width: 100%">
    <div class="demo8">
        <div class="vc8">css-table</div>
    </div>
</div>
```

### flex

实现原理：css3 经典的 flex 布局。

```css
.demo9 {
    width:100%;
    height: 500px;
    border:1px solid #ccc;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vc9 {
    background-color: blue;
}

<div class="demo9">
    <div class="vc9">flex</div>
</div>
```

### grid

实现原理：比较不常用的 grid 布局，可以通过子层的 align-self 和 justify-self 来做到垂直居中。

```css
.demo10 {
    width:100%;
    height: 500px;
    border:1px solid #ccc;
    box-sizing: border-box;
    color: #fff;
    display: grid;
}
.vc10 {
    align-self: center;
    justify-self: center;
    background-color: blue;
}

<div class="demo10">
    <div class="vc10">grid</div>
</div>
```
