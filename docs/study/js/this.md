<!--
 * @Description: this指向问题
 * @Author: shiduobin
 * @Date: 2021-01-30 11:13:44
 * @LastEditors: shiduobin
 * @LastEditTime: 2021-02-04 09:52:59
-->

# This 指向问题

## 实现一个 bind 方法

:::details 解释
`bind`方法返回一个新方法
:::

```js
Function.prototype.bind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let _this = this;
  let _args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(..._args, ...arguments);
    } else {
      return _this.apply(context, _args.concat(...arguments));
    }
  };
};
```

## 实现一个 call 方法

```js
Function.prototype.call = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("context must be a function");
  }
  context = context || window;
  context.fn = this;
  let result;
  const args = Array.prototype.slice.call(arguments, 1);
  if (args.length) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete result.fn;
  return result;
};
```

## 实现一个 apply 方法

```js
Function.prototype.apply = function(context) {
  if (typeof context !== "function") {
    throw new TypeError("context must be a function");
  }
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
```