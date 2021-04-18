---
title: Web App 适配方案 REM
categories:
  - CSS
---

## 什么是 REM

rem（font size of the root element）是指相对于根元素的字体大小的单位。简单的说它就是一个相对单位。看到 rem 大家一定会想起 em 单位，em（font size of the element）是指相对于父元素的字体大小的单位。它们之间其实很相似，只不过`rem`的计算规则是依赖根元素，`em`是依赖父元素计算。

## 为什么使用 REM

rem 的出现主要是为了解决移动端的适配问题，不同的手机屏幕宽度是不一样的，如果我们使用固定的大小，那么在不同大小的设备上就会出现布局错乱、留白、残缺等现象的出现。早期的解决方案是，以最小的屏幕（iPhone）做一版数据出来，然后通过 js 去控制 viewport 的 initial-scale （网页缩放比例）。

早期【天猫】移动端也是用用这样的方法实现的。能满足我们的需求。缺点是：这样做会使得，因为 initial-scale 越来越大，相当于拉伸网页，而使得在大屏幕的移动端设备下，文字、图片会变模糊。

## 如何计算 REM

因为设备的大小我们是无法预知的，所以 1rem 的大小在不同设备上也就不同，如果我们在加载时知道了设备的宽度，我们就可以根据这个宽度来动态的计算出在该设备上 1rem 究竟应该是多少，然后设置到 html 元素上。假设设计图宽度为 designWidth，实际设备宽度为 windowWidth，那么可以计算出实际的 1rem = （designWidth/windowWidth）\*100。这里的 100 为我们在设计图中设置的 1rem 的大小，也叫基准值。

## 为什么选 100px 作为基准值

上面讲到我们设置的基准值为 100px，当然也是可以设置 50、14 等来作为基准值，那我们为什么要选 100 作为基准值呢？

主要还是 为了方便计算，20px 换算后为 0.2rem，16px 换算后为 0.16rem。如果基准值为 14 的话，20px = 20/14 = 1.43rem，很明显在计算上要麻烦很多。既然这样，有人问了，我如果选 1px 作为基准值岂不是更方便，14px 就为 14rem，20px 就为 20px。有个问题不要忽略了，浏览器的最小字体大小为 12px，所以设根元素的字体大小为 1px 是不可以的，只能大于 12px，大于 12 的就 100 计算最为方便。

## 代码实现

```js
(function(doc, win, image_width) {
  // 获取html标签
  var docEl = doc.documentElement,
    // orientationchange方向改变事件
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      // 当前设备视口宽度
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / image_width) + "px";
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window, 375);
```

:::tip
附上阿里手淘的 rem [解决方案](https://github.com/amfe/lib-flexible)
:::
