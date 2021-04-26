---
title: 事件总线
---

# 什么是事件总线（Eventbus）

事件总线是一种机制，是对**发布-订阅模式**的一种实现，它允许不同的组件彼此通信而不彼此了解。 组件可以将事件发送到 Eventbus，而无需知道是谁来接听或有多少其他人来接听。 组件也可以侦听 Eventbus 上的事件，而无需知道谁发送了事件。 这样，组件可以相互通信而无需相互依赖，达到一种解耦的目的。

## 适用于何种场景

我们有时会遇到这种情况，那就是在一个页面中当有一个数据被修改时，其它的多处信息展示也应该被同步更新，这时候普通的操作就显得有些繁琐而不可靠，不过采用事件总线的思维是一个不错的解决方式。

## 实现一个事件总线

```js
class EventBus {
  constructor() {
    // 存储所有的事件
    this._events = [];
  }
  on(event, fn) {
    // 如果事件是个数据
    if (Array.isArray(event)) {
      for (let i = 0; i < event.length; i++) {
        this.on(event[i], fn);
      }
    } else {
      // 存在直接push, 不存在创建为空数组再push
      (this._events[event] || (this._events[event] = [])).push(fn);
    }
  }
  off(event, fn) {
    // 如果没有参数销毁所有事件
    if (!arguments.length) {
      this._events = [];
    }
    // 如果事件是数组循环销毁
    if (Array.isArray(event)) {
      for (let i = 0; i < event.length; i++) {
        this.off(event[i], fn);
      }
    }
    let cbs = this._events[event];
    if (!cbs) return;
    // 如果只传入事件名称，清除所有监听函数
    if (arguments.length === 1) {
      this._events[event] = null;
    }
    let cb,
      i = cbs.length;
    while (i--) {
      cb = cbs[i];
      // cb.fn===fn用来移除once注册的事件
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
  }
  once(event, fn) {
    let _this = this;
    // 封装一个高阶函数on，最终在on函数中调用fn
    function on() {
      // 每当执行了一次on，移除event里的on事件，后面再触发event事件就不会再执行on事件了，也就不会执行on里面的fn事件
      _this.off(event, on);
      // 执行高阶函数on的时候，执行fn并传入emit调用时传入的参数
      fn.apply(null, arguments);
    }
    /*
    这个赋值是在off方法里会用到的
    比如我们调用了off(event,fn)来移除fn回调函数，然而我们在调用once的时候，实际执行的是on(event, on)
    所以在event的回调函数数组里添加的是on函数，这个时候要移除fn，我们无法在回调函数数组里面找到fn函数移除，
    只能找到on函数，我们可以通过on.fn === fn来判断这种情况，并在回调函数数组里移除on函
    */
    on.fn = fn;
    this.on(event, on);
  }
  emit(event) {
    let cbs = this._events[event];
    if (cbs) {
      let args = [...arguments].slice(1);
      // 遍历回调函数列表，调用每个回调函数
      for (let i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(null, args);
      }
    }
  }
}
```
