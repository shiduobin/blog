---
title: Javascript 中 Object.create 方法原生实现
categories:
  - JS
---

## 方法说明

`Object.create(proto，[propertiesObject])` 方法创建一个新的对象，并使用现有的对象来提供新创建的对象的 \_\_proto\_\_（以第一个参数作为新对象的构造函数的原型对象）

## 参数

- proto  
  新创建对象的原型对象。

- propertiesObject  
  可选。需要传入一个对象，该对象的属性类型参照[`Object.defineProperties()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)的第二个参数。如果该参数被指定且不为`undefined`，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。

:::warning 注意
如果 `propertiesObject` 参数是 `null` 或非原始包装对象，则抛出一个 `TypeError` 异常。
:::

### 源码实现

```js
Object.create = function(proto, propertiesObject = undefined) {
  if (typeof proto !== "object") {
    throw new TypeError(
      "Object prototype may only be an Object or null:" + proto
    );
  }
  if (propertiesObject === null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  // 创建一个空的构造函数
  let Fn = function() {};
  // Fn 原型指向 proto
  F.prototype = proto;
  // 创建 Fn 的实例
  let obj = new Fn();
  // 如果 propertiesObject 不是 undefined，则为创建的对象定义新的属性或修改现有属性
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }
  // 返回新创建的对象
  return obj;
};
```
