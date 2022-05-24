---
title: HTTP 请求头之 Content-Length
categories:
  - HTTP
tags:
  - 随记
img: https://pic1.zhimg.com/v2-c0b0cbf72a000259d1a49b83ef6fabc9_1440w.jpg?source=172ae18b
---

## 什么是 Content-Length

Content-Length 用于**描述 HTTP 消息实体的传输长度**，用十进制数字表示的八位元组的数目。在 `HTTP` 协议中，消息实体长度 (Entity-length) 和消息实体的传输长度是有区别，比如说 `gzip` 压缩下，消息实体长度是压缩前的长度，消息实体的传输长度是 `gzip` 压缩后的长度。

## Content-Length 是如何工作的

Content-Length 采用十进制的数字表示了消息的长度, 服务端/客户端通过它来得知后续要读取消息的长度。

## Content-Length 长度不一致引发的问题

1、Content-Length > 实际长度  
如果 `Content-Length` 比实际的长度大, 服务端/客户端读取到消息结尾后, 会等待下一个字节, 自然会无响应直到超时。

2、Content-Length < 实际长度  
如果这个长度小于实际长度, 首次请求的消息会被截取, 比如参数为 `param=piaoruiqing`, `Content-Length` 为 10, 那么这次请求的消息会被截取为: `param=piao`。

## 不确定 Content-Length 的长度

对于一些静态的资源我们可以准确知道资源的大小，但对于一些动态的资源比如边传输边下载的资源，我们是无法提前知道资源的大小的，这时我们就需要设置 `Transfer-Encoding: chunked` 来替代 `Content-Length`

## 什么是 Transfer-Encoding: chunked

`Transfer-Encoding: chunked` 表示输出的内容长度不能确定，消息体由数量未定的块组成，并以最后一个大小为 0 的块为结束。每一个数据块都包含十六进制的数据长度值和数据，长度值独占一行，长度不包括它结尾的 `CRLF（\r\n）`，也不包括分块数据结尾的 `CRLF`，最后一个分块长度值必须为 0，对应的分块数据没有内容，表示实体结束。

**注意：当设置了 Transfer-Encoding: chunked 时，Content-Length 则会被忽略**

## Content-Length 应用场景

通过 Content-Length 我们可以实现简单的文件下载进度条功能，简单的代码实现如下：

```js
let xhr = new XMLHttpRequest();
const downloadUrl = "installer.dmg";
xhr.open("GET", downloadUrl, true);
xhr.addEventListener("progress", onDownloadProgress, false);
xhr.send();
function onDownloadProgress(event) {
  // 通过 event.lengthComputable 可以判断是响应头中是否添加了 Content-Length
  if (event.lengthComputable) {
    // 当前已加载资源字节大小
    const loaded = event.loaded;
    // 总资源大小 Content-Length 的长度
    const total = event.total;
    // 相关下载动画展示逻辑。。。
  }
}
```
