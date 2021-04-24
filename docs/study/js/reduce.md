<!--
 * @Description:
 * @Author: shiduobin
 * @Date: 2021-01-30 11:13:44
 * @LastEditors: shiduobin
 * @LastEditTime: 2021-04-24 19:02:25
-->

# Array.prototype.reduce()

# 描述

`reduce`为数组中的每一个元素依次执行`callback`函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

- `accumulator 累计器`
- `currentValue 当前值`
- `currentIndex 当前索引`
- `array 数组`

回调函数第一次执行时，`accumulator`和`currentValue`的取值有两种情况：如果调用`reduce()`时提供了 `initialValue`，`accumulator` 取值为 `initialValue`，`currentValue` 取数组中的第一个值；如果没有提供 `initialValue`，那么 `accumulator` 取数组中的第一个值，`currentValue` 取数组中的第二个值。

```js
Array.prototype.reduce = function(callback, initialValue) {
  if (!Array.isArray(this) || !this.length || typeof callback !== "function") {
    return [];
  }
  const hasInitialValue = initialValue !== undefined;
  let value = hasInitialValue ? initialValue : this[0];
  for (let index = hasInitialValue ? 0 : 1; index < this.length; index++) {
    const element = this[index];
    value = callback(value, element, index, this);
  }
  return value;
};
```

::: tip 注意
注意：如果没有提供 initialValue，reduce 会从索引 1 的地方开始执行 callback 方法，跳过第一个索引。如果提供 initialValue，从索引 0 开始。
:::
