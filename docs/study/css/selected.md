<!--
 * @Description: CSS选择器
 * @Author: shiduobin
 * @Date: 2021-02-19 20:40:54
 * @LastEditors: shiduobin
 * @LastEditTime: 2021-02-20 10:07:28
-->

# CSS 选择器

## :last-of-type 选择器

:::details 概述
`:last-of-type` [CSS 伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) 表示了在（它父元素的）子元素列表中，最后一个给定类型的元素。当代码类似 Parent tagName:last-of-type 的作用区域包含父元素的所有子元素中的最后一个选定元素，也包括子元素的最后一个子元素并以此类推。
:::

#### 实例
指定父元素的最后一个 p 元素的背景色：

```css
p:last-of-type {
  background: #299983;
}
```

::: tip 提示
等同于 :nth-last-of-type(1)。
:::
