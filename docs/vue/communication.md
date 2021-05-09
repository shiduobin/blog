---
title: VUE 组件间数据通信的几种方式
categories:
  - VUE
img: https://pic3.zhimg.com/v2-3e416f3905705ec6be46c774d385b20d_1440w.jpg
---

## 总结：

- 父组件和子组件间通信：
  - 父向子传递数据是通过 props，子向父传递数据是通过 event(\$emit)；
  - 通过父链/子链进行数据传递($parent / \$children)；
  - 通过 ref 也可以访问组件实例；
  - 依赖注入：provide / inject；
- 兄弟组件间通信：
  - event bus
  - Vuex
- 跨级组件间通信：
  - event bus；
  - Vuex；
  - 依赖注入：provide / inject；
  - Vue.observable()
