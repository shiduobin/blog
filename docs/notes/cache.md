---
title: 浏览器缓存策略
categories:
  - HTTP
tags:
  - 随记
img: https://pic1.zhimg.com/v2-c0b0cbf72a000259d1a49b83ef6fabc9_1440w.jpg?source=172ae18b
---

# 缓存过程

浏览器第一次向服务器请求后，通过 DNS 解析会产生 DNS 缓存，请求到资源后，浏览器自身会产生 memory cache（内存缓存），
并且此时浏览器会根据第一次请求响应头中的缓存标识产生 disk cache（硬盘缓存又叫 HTTP 缓存） 。

# 缓存的类型

## DNS 缓存

通常我们从浏览器输入一个域名后，通过 DNS 域名解析，会得到一个 IP 地址，然后会建立连接，进行通信。

```
www.baidu.com（域名） => DNS域名解析 => 110.242.68.3（IP地址）
```

浏览器在第一次获取到这个 IP 地址之后，会将起缓存起来。下次相同域名再次发起请求时，浏览器会先查找本地缓存，如果缓存有效，则会直接返回该 IP 地址，否则会继续开始寻址的过程。

## memory cache（内存缓存）

memory cache 内存缓存是浏览器为了加快缓存读取自身做的优化，不受 max-age、no-cache 等配置的影响，即便我们不设置缓存，如果内存空间充裕，一些资源还是会通过 memory cache 缓存下来。这种缓存是暂时的，当关闭当前页面时，用于缓存的内存空间就会被释放掉，即缓存的资源就会消失。

## disk cache（HTTP 缓存）

disk cache 硬盘缓存又叫 HTTP 缓存。HTTP 缓存又分为**强缓存**和**协商缓存**。

### 强缓存

浏览器在加载资源时，会先根据本地缓存资源的 header 中的 `Expires` 和 `Cache-Control` 信息判断是否命中强缓存，如果命中则直接使用缓存中的资源不会再向服务器发送请求。`Expires` 与 `Cache-Control` 的区别在于前者是 http1.0 的协议, 后者是 http1.1 的协议, 并且后者的优先级高于前者。

#### Expires

```
Expires: Wed, 11 May 2018 07:20:00 GMT
```

Expires 是一个表示资源过期的 header, 描述一个**绝对时间**, 由服务器返回, 在此时间之前缓存有效，之后则缓存失效。 Expires 受限于本地时间, 修改本地时间会造成缓存失效。

#### Cache-Control

```
Cache-Control: max-age=3600
```

Cache-Control 这个首部是可选的, 并且可以用于请求以及响应时。其中 max-age 用于表示缓存的有效时间，单位为秒，是一个相对时间，如上例子，代表着资源的有效缓存时间是 3600 秒。cache-control 除了该字段外，还有下面几个比较常用的设置值：

- no-cache：客户端缓存内容，是否使用缓存则需要经过协商缓存来验证决定。表示不使用 Cache-Control 的缓存控制方式做前置验证，而是使用 Etag 或者 Last-Modified 字段来控制缓存。这个名字有一点歧义，并不是说浏览器不能缓存，只是浏览器在使用缓存数据时，需要先确认一下资源文件是否还跟服务器保持一致。
- no-store：禁止使用缓存包括 memory cache，每一次都要重新请求数据。
- public：可以被所有的用户缓存，包括终端用户和 CDN 等中间代理服务器。
- private：只能被终端用户的浏览器缓存，不允许 CDN 等中继缓存服务器对其缓存。

### 协商缓存

当强缓存没有命中时，此时浏览器会携带一个缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存。这里的请求标识是指 `Last-Modified/If-Modified-Since`e 和 `ETag/If-None-Match`。

#### Last-Modified/If-Modified-Since

当浏览器第一次请求的响应头包含了 `Last-Modified` 标识（资源文件最后一次更改时间时）时，后续当浏览器再次请求该资源时，请求头会添加 `If-Modified-Since`，该值为缓存之前返回的 `Last-Modified` 的值。服务器收到 `If-Modify-Since` 后，根据资源的最后修改时间判断是否命中缓存。
如果命中缓存，则会返回 `304` ，并且不会返回资源内容，而且不会返回 `Last-Modified`。

#### ETag/If-None-Match

`Etag` 是 服务器返回的一个校验码，`ETag` 可以保证每一个资源是唯一的，资源变化都会导致 `ETag` 变化。当响应头包含 `Etag` 字段时，后续的请求头会添加 `If-None-Match`，值为之前返回的 `Eta`g 的值。服务器根据浏览器上送的 `If-None-Match` 值来判断是否命中缓存。
与 `Last-Modified` 不一样的是，当服务器返回 `304 Not Modified` 的响应时，由于 `ETag` 重新生成过，请求头中还会把这个 `ETag` 返回，即使这个 `ETag` 跟之前的没有变化。

:::tip
当 `Last-Modified` 和 `Etag` 同时存在时，服务器会优先验证 `Etag`，一致的情况下会继续比对 `Last-Modified`，然后决定是否返回`304`
:::

# 总结

当浏览器再次访问同一个资源时，会走如下的流程：  
1、 根据 `Expires` 或 `Cache-Control` 判断是否命中强缓存，命中则直接使用缓存；  
2、 如果没有命中则携带 `If-Modified-Since` 或 `If-None-Match` 标识发送请求到服务端，确认是否命中协商缓存；  
3、 如果命中协商缓存，服务器会返回 `304` 告诉浏览器使用本地缓存；  
4、 否则，浏览器返回正常状态码 `200` 的响应以及响应体，同时可以附带上新的缓存指令，浏览器缓存新的内容；
