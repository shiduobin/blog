---
title: 关于 transition 和 animition 的区别
categories:
  - CSS
tags:
  - 随记
img: https://jc.chazidian.com/Images/jiaocheng/2015-05-0713/1176873911.jpg
---

transition 和 animition 都是 CSS3 的新特性，我们可以使用这两个特性做出一些动画效果，他们的大部分功能是重叠的，但也存在着许多不同点，接下来让我们了解一下这两个特性以及他们的使用方法。

## transition

transition **主要用来控制元素的 CSS 属性的值从一种状态过渡到另外一种状态**，一般需要配合事件来触发过渡，如：点击、悬浮、聚焦等等，只有两种状态开始和结。

### 语法

```css
transition: property duration timing-function delay;
```

| 值                         | 描述                           |
| :------------------------- | :----------------------------- |
| transition-property        | 设置过渡效果的 CSS 属性的名称  |
| transition-duration        | 完成过渡效果需要多少秒或毫秒   |
| transition-timing-function | 速度效果的速度曲线             |
| transition-delay           | 定义过渡效果何时开始，默认是 0 |

### 实例

```html
<body>
  <div></div>
</body>
<style>
  div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
    -webkit-transition: width 2s; /* Safari */
  }
  div:hover {
    width: 300px;
  }
</style>
```

### transition 特性

- 只能定义一个属性
- 只有两个状态:开始和结束
- 不能暂停动画
- 需要伪类和或事件触发，不能循环重复触发，除非再一次触发相同事件

## animation

animition 是用来控制元素 CSS 属性的动画，但是不同于 transition 只有开始和结束两种状态，animition 可以控制属性中间的变化过程，并且 animation 配合 keyframe 属性可以逐帧控制，让动画过渡更加顺滑细腻。

### 语法

```css
animation: name duration timing-function delay iteration-count direction
  fill-mode play-state;
```

| 值                        | 描述                                                                     |
| :------------------------ | :----------------------------------------------------------------------- |
| animation-name            | 需要绑定到选择器的 keyframe 名称                                         |
| animation-duration        | 完成动画所花费的时间，以秒或毫秒计                                       |
| animation-timing-function | 动画的速度曲线                                                           |
| animation-delay           | 在动画开始之前的延迟                                                     |
| animation-iteration-count | 动画应该播放的次数                                                       |
| animation-direction       | 是否应该轮流反向播放动画                                                 |
| animation-fill-mode       | 动画不播放时(动画完成时，或动画有一个延迟未开始播放时)要应用到元素的样式 |
| animation-play-state      | 指定动画是否正在运行或已暂停                                             |

### 实例

```html
<style>
  div {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 5s infinite;
    -webkit-animation: mymove 5s infinite; /*Safari and Chrome*/
  }
  ​ @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 200px;
    }
  }
  ​
@-webkit-keyframes mymove /*Safari and Chrome*/
 {
    from {
      left: 0px;
    }
    to {
      left: 200px;
    }
  }
</style>
<body>
  <div></div>
</body>
```

### animation 特性

- 自动触发，不需要事件
- 可以控制每一帧
- 可以暂定动画
- 结合 @keyframes 使用
