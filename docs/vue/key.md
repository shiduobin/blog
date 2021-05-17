---
title: VUE 中 key 的作用和工作原理
categories:
  - VUE
---

## key 的作用

1. 为了高效的更新虚拟 DOM ，vue 在 patch 的过程中通过 key 可以判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个 patch 过程更加高效，减少 DOM 操作量，提高性能。
2. 在使用相同标签名元素的过度切换时，也会用到 key，目的是为了让 vue 去分出它们，否则 vue 只会替换其内部属性不会触发过渡效果。

::: warning
有相同父元素的子元素必须有**独特的 key**，重复的 key 会造成渲染错误。
:::

## key 的工作原理

因为 key 值主要使用在虚拟 DOM 算法，即 diff 算法中，会调用 patch 方法，方法的实现在 `src/core/vdom/patch.js` 文件中。正真用到 key 的是在 sameVnode 方法中

:::tip
调用顺序：patch() -> patchVnode() -> updateChildren() -> sameVnode()
:::

```js
/* 比较是否是相同的虚拟节点 */
function sameVnode(a, b) {
  return (
    // 首先判断两个节点的 key 值是否一样，如果都没有 undefined 也为一样
    a.key === b.key &&
    // 判断是否都是异步加载的组件
    a.asyncFactory === b.asyncFactory &&
    // 判断是否都是相同的标签
    ((a.tag === b.tag &&
      // 判断是否都是注释
      a.isComment === b.isComment &&
      // 判断两个节点的 data 属性是否都存在或都不存在
      isDef(a.data) === isDef(b.data) &&
      // 判断是否都是 input 标签，如果是，需要判断它们的 type 属性是否一样
      sameInputType(a, b)) ||
      (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error)))
  );
}
```
