---
title: 实现一个带并发限制的异步调度器
categories:
  - JS
tags:
  - 随记
---

## 代码实现

```js
class FetchLimit {
  constructor(maxLimit) {
    this.maxParallelCount = maxLimit;
    this.parallelCount = 0;
    this.tasks = [];
  }
  request(promise, ...args) {
    return new Promise((resolve, reject) => {
      let task = this.createTask(promise, args, resolve, reject);
      if (this.parallelCount >= this.maxParallelCount) {
        this.tasks.push(task);
      } else {
        task();
      }
    });
  }
  createTask(promise, args, resolve, reject) {
    return () => {
      promise(...args)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => {
          this.parallelCount--;
          if (this.tasks.length) {
            let task = this.tasks.shift();
            task();
          }
        });
      this.parallelCount++;
    };
  }
}
```

## 调用例子

```js
let requestUrl = "https://foundation.youdao.com/ip/ipinfo";
function createPromise(time) {
  return new Promise((resolve) => {
    fetch(requestUrl)
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setTimeout(() => resolve(res), time);
      });
  });
}
const requestInstance = new FetchLimit(3);
requestInstance.request(createPromise, 1000).then((result) => {
  console.log(result, "1");
});
requestInstance.request(createPromise, 1000).then((result) => {
  console.log(result, "2");
});
requestInstance.request(createPromise, 1000).then((result) => {
  console.log(result, "3");
});
requestInstance.request(createPromise, 1000).then((result) => {
  console.log(result, "4");
});
```
