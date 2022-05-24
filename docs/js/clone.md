---
title: 深浅拷贝的理解与使用
categories:
  - JS
---

## 为什么需要深浅拷贝

**深浅拷贝主要是用在引用数据类型复制的时候**，在 Js 中数据类型总体分为两大类`基本数据类型`和`引用数据类型`。当我们创建一个基本数据类型时，会在`栈`中开辟一片内存`直接将变量和值存在栈内存中`。当我们创建一个引用类型的数据时，会同时在`栈和堆`中开辟一片内存，将`值存在堆内存中`，`在栈内存中存当前变量和一个指针(引用)也就是值在堆内存中的地址`。所以当我们复制一个基本数据类型的变量时，复制的是值。而当我们复制引用数据类型时，复制的是当前的指针(引用)，它们指向的是同一片在堆内存中的地址，因此当我们修改其中一个变量的值时，被复制或复制变量的值也会发生改变，但有时候我们希望它们是互不影响的，因此就有了深拷贝和浅拷贝。

基本数据类型： Number、String、Boolean、Null、 Undefined、Symbol (ES6)、BigInt (ES6)  
引用数据类型：Object（在 JS 中除了基本数据类型以外的都是对象，数组是对象，函数是对象，正则表达式是对象）

## 什么是浅拷贝

浅拷贝对于基本数据类型拷贝的是值，而对于引用数据类型，拷贝的是引用内存地址，因此如果其中一个对象改变了这个地址，就会影响到另一个对象。

### 浅拷贝的方法

1. Object.assing()

```js
let obj = { name: "demo", info: { phone: 888 } };
let obj2 = Object.assign({}, obj);
obj2.name = "test";
obj2.info.phone = 999;
console.log(obj, obj2); // {"name": "demo","info": {"phone": 999}} {"name": "test","info": {"phone": 999}}
```

2. es6 拓展运算符 {...}

```js
let obj = { name: "demo", info: { phone: 888 } };
let obj2 = { ...obj };
obj2.name = "test";
obj2.info.phone = 999;
console.log(obj, obj2); // {"name": "demo","info": {"phone": 999}} {"name": "test","info": {"phone": 999}}
```

3. Array.prototype.concat()

```js
let arr = [1, 2, { name: "demo" }];
let arr2 = [].concat(arr);
arr2[1] = "ha";
arr2[2].name = "test";
console.log(arr, arr2); // [1, 2, {"name": "test"}] [1, "ha", {"name": "test"}]
```

4. es6 拓展运算符 [...]

```js
let arr = [1, 2, { name: "demo" }];
let arr2 = [...arr];
arr2[1] = "ha";
arr2[2].name = "test";
console.log(arr, arr2); // [1, 2, {"name": "test"}] [1, "ha", {"name": "test"}]
```

5. Array.prototype.slice()

```js
let arr = [1, 2, { name: "demo" }];
let arr2 = arr.slice(0);
arr2[1] = "ha";
arr2[2].name = "test";
console.log(arr, arr2); // [1, 2, {"name": "test"}] [1, "ha", {"name": "test"}]
```

## 什么是深拷贝

深拷贝除了会拷贝基本数据类型的值，对于引用数据类型会创建新的对象，并且对子对象会进行深层的递归，不公用内存，因此修改新对象不会改到原对象。

### 深拷贝的方法

1. JSON.parse(JSON.stringify())

```js
let arr = [1, 3, { name: " kobe" }];
let ar2 = JSON.parse(JSON.stringify(arr));
arr2[2].username = "duncan";
console.log(arr, arr2); // [1, 2, {"name": "kobe"}] [1, "ha", {"name": "duncan"}]
```

原理： 用 JSON.stringify 将对象转成 JSON 字符串，再用 JSON.parse()把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝。**这种方法虽然可以实现数组或对象深拷贝，但不能处理函数。**

```js
let arr = [1, 3, { name: " kobe" }, function() {}];
let arr2 = JSON.parse(JSON.stringify(arr));
arr2[2].name = "duncan";
console.log(arr, arr2); // [1, 3, {"name": "kobe"}, f()] [1, 3, {"name": "duncan"}, null]
```

2. 实现递归深拷贝方法

```js
const cloneDeep = function(obj) {
  let cloneObj = null;
  if (
    typeof obj === "string" ||
    typeof obj === "number" ||
    typeof obj === "boolean" ||
    typeof obj === "undefined"
  ) {
    cloneObj = obj;
  } else {
    cloneObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      // 测一个属性是否是对象的自有属性，而不是从原型链继承的
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          cloneObj[key] = deepClone(obj[key]);
        } else {
          cloneObj[key] = obj[key];
        }
      }
    }
  }
  return cloneObj;
};
```

::: tip
附上 lodash 官方的[深拷贝方法](https://lodash.com/docs/#cloneDeep)
:::
