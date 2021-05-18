---
title: Promise 源码实现
---

## 为何使用 Promis

1. 解决回调地狱的问题
2. 支持链式调用

## Promise.all()

:::details 方法解释
Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）的输入，并且只返回一个`Promise`实例， 那个输入的所有 promise 的 resolve 回调的结果是一个数组。这个`Promise`的 resolve 回调执行是在所有输入的 promise 的 resolve 回调都结束，或者输入的 iterable 里没有 promise 了的时候。它的 reject 回调执行是，只要任何一个输入的 promise 的 reject 回调执行或者输入不合法的 promise 就会立即抛出错误，并且 reject 的是第一个抛出的错误信息。
:::

```js
Promise.all = (promises) => {
  return new Promise((resolve, reject) => {
    let values = [];
    let count = 0;
    const resolveResult = (index, data) => {
      values[index] = data;
      if (++count === promises.length) {
        resolve(values);
      }
    };
    for (let index = 0; index < promises.length; index++) {
      const promise = promises[index];
      if (primise instanceof Promise) {
        promise.then(
          (res) => {
            resolveResult(index, res);
          },
          (error) => {
            reject(err);
          }
        );
      } else {
        resolveResult(index, promise);
      }
    }
  });
};
```

## Promise.race()

:::details 方法解释
`Promise.race(iterable)` 方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。
:::

```js
Promise.race = (promises) => {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      const promise = promises[index];
      Promise.resolve(promise).then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
```

## Promise.allSettled()

::: details 方法解释
该`Promise.allSettled()`方法返回一个在所有给定的 promise 都已经`fulfilled`或`rejected`后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。
:::

```js
Promise.allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    let settled = 0;
    let result = [];
    for (let index = 0; index < promises.length; index++) {
      const promise = promises[index];
      promise
        .then((res) => {
          result[index] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((err) => {
          result[index] = {
            status: "rejected",
            reason: err,
          };
        })
        .finally(() => {
          ++settled === promises.length && resolve(result);
        });
    }
  });
};
```
