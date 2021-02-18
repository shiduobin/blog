<!--
 * @Description:
 * @Author: shiduobin
 * @Date: 2021-01-30 11:13:44
 * @LastEditors: shiduobin
 * @LastEditTime: 2021-01-30 14:30:04
-->

# Array.prototype.reduce

```js
Array.prototype.reduce = function(callback, initialValue) {
  if (Array.isArray(this) || !this.length || typeof callback !== "function") {
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
