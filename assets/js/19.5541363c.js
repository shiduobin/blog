(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{604:function(e,a,t){"use strict";t.r(a);var v=t(2),s=Object(v.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"缓存过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存过程"}},[e._v("#")]),e._v(" 缓存过程")]),e._v(" "),t("p",[e._v("浏览器第一次向服务器请求后，通过 DNS 解析会产生 DNS 缓存，请求到资源后，浏览器自身会产生 memory cache（内存缓存），\n并且此时浏览器会根据第一次请求响应头中的缓存标识产生 disk cache（硬盘缓存又叫 HTTP 缓存） 。")]),e._v(" "),t("h1",{attrs:{id:"缓存的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存的类型"}},[e._v("#")]),e._v(" 缓存的类型")]),e._v(" "),t("h2",{attrs:{id:"dns-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-缓存"}},[e._v("#")]),e._v(" DNS 缓存")]),e._v(" "),t("p",[e._v("通常我们从浏览器输入一个域名后，通过 DNS 域名解析，会得到一个 IP 地址，然后会建立连接，进行通信。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("www.baidu.com（域名） => DNS域名解析 => 110.242.68.3（IP地址）\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("浏览器在第一次获取到这个 IP 地址之后，会将起缓存起来。下次相同域名再次发起请求时，浏览器会先查找本地缓存，如果缓存有效，则会直接返回该 IP 地址，否则会继续开始寻址的过程。")]),e._v(" "),t("h2",{attrs:{id:"memory-cache-内存缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache-内存缓存"}},[e._v("#")]),e._v(" memory cache（内存缓存）")]),e._v(" "),t("p",[e._v("memory cache 内存缓存是浏览器为了加快缓存读取自身做的优化，不受 max-age、no-cache 等配置的影响，即便我们不设置缓存，如果内存空间充裕，一些资源还是会通过 memory cache 缓存下来。这种缓存是暂时的，当关闭当前页面时，用于缓存的内存空间就会被释放掉，即缓存的资源就会消失。")]),e._v(" "),t("h2",{attrs:{id:"disk-cache-http-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache-http-缓存"}},[e._v("#")]),e._v(" disk cache（HTTP 缓存）")]),e._v(" "),t("p",[e._v("disk cache 硬盘缓存又叫 HTTP 缓存。HTTP 缓存又分为"),t("strong",[e._v("强缓存")]),e._v("和"),t("strong",[e._v("协商缓存")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[e._v("#")]),e._v(" 强缓存")]),e._v(" "),t("p",[e._v("浏览器在加载资源时，会先根据本地缓存资源的 header 中的 "),t("code",[e._v("Expires")]),e._v(" 和 "),t("code",[e._v("Cache-Control")]),e._v(" 信息判断是否命中强缓存，如果命中则直接使用缓存中的资源不会再向服务器发送请求。"),t("code",[e._v("Expires")]),e._v(" 与 "),t("code",[e._v("Cache-Control")]),e._v(" 的区别在于前者是 http1.0 的协议, 后者是 http1.1 的协议, 并且后者的优先级高于前者。")]),e._v(" "),t("h4",{attrs:{id:"expires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" Expires")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Expires: Wed, 11 May 2018 07:20:00 GMT\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Expires 是一个表示资源过期的 header, 描述一个"),t("strong",[e._v("绝对时间")]),e._v(", 由服务器返回, 在此时间之前缓存有效，之后则缓存失效。 Expires 受限于本地时间, 修改本地时间会造成缓存失效。")]),e._v(" "),t("h4",{attrs:{id:"cache-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[e._v("#")]),e._v(" Cache-Control")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Cache-Control: max-age=3600\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Cache-Control 这个首部是可选的, 并且可以用于请求以及响应时。其中 max-age 用于表示缓存的有效时间，单位为秒，是一个相对时间，如上例子，代表着资源的有效缓存时间是 3600 秒。cache-control 除了该字段外，还有下面几个比较常用的设置值：")]),e._v(" "),t("ul",[t("li",[e._v("no-cache：客户端缓存内容，是否使用缓存则需要经过协商缓存来验证决定。表示不使用 Cache-Control 的缓存控制方式做前置验证，而是使用 Etag 或者 Last-Modified 字段来控制缓存。这个名字有一点歧义，并不是说浏览器不能缓存，只是浏览器在使用缓存数据时，需要先确认一下资源文件是否还跟服务器保持一致。")]),e._v(" "),t("li",[e._v("no-store：禁止使用缓存包括 memory cache，每一次都要重新请求数据。")]),e._v(" "),t("li",[e._v("public：可以被所有的用户缓存，包括终端用户和 CDN 等中间代理服务器。")]),e._v(" "),t("li",[e._v("private：只能被终端用户的浏览器缓存，不允许 CDN 等中继缓存服务器对其缓存。")])]),e._v(" "),t("h3",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[e._v("#")]),e._v(" 协商缓存")]),e._v(" "),t("p",[e._v("当强缓存没有命中时，此时浏览器会携带一个缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存。这里的请求标识是指 "),t("code",[e._v("Last-Modified/If-Modified-Since")]),e._v(" 和 "),t("code",[e._v("ETag/If-None-Match")]),e._v("。")]),e._v(" "),t("h4",{attrs:{id:"last-modified-if-modified-since"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[e._v("#")]),e._v(" Last-Modified/If-Modified-Since")]),e._v(" "),t("p",[e._v("当浏览器第一次请求的响应头包含了 "),t("code",[e._v("Last-Modified")]),e._v(" 标识（资源文件最后一次更改时间）时，后续当浏览器再次请求该资源时，请求头会添加 "),t("code",[e._v("If-Modified-Since")]),e._v("，该值为缓存之前返回的 "),t("code",[e._v("Last-Modified")]),e._v(" 的值。服务器收到 "),t("code",[e._v("If-Modify-Since")]),e._v(" 后，根据资源的最后修改时间判断是否命中缓存。\n如果命中缓存，则会返回 "),t("code",[e._v("304")]),e._v(" ，并且不会返回资源内容，而且不会返回 "),t("code",[e._v("Last-Modified")]),e._v("。")]),e._v(" "),t("h4",{attrs:{id:"etag-if-none-match"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[e._v("#")]),e._v(" ETag/If-None-Match")]),e._v(" "),t("p",[t("code",[e._v("Etag")]),e._v(" 是 服务器返回的一个校验码，"),t("code",[e._v("ETag")]),e._v(" 可以保证每一个资源是唯一的，资源变化都会导致 "),t("code",[e._v("ETag")]),e._v(" 变化。当响应头包含 "),t("code",[e._v("Etag")]),e._v(" 字段时，后续的请求头会添加 "),t("code",[e._v("If-None-Match")]),e._v("，值为之前返回的 "),t("code",[e._v("Etag")]),e._v(" 的值。服务器根据浏览器上送的 "),t("code",[e._v("If-None-Match")]),e._v(" 值来判断是否命中缓存。\n与 "),t("code",[e._v("Last-Modified")]),e._v(" 不一样的是，当服务器返回 "),t("code",[e._v("304 Not Modified")]),e._v(" 的响应时，由于 "),t("code",[e._v("ETag")]),e._v(" 重新生成过，请求头中还会把这个 "),t("code",[e._v("ETag")]),e._v(" 返回，即使这个 "),t("code",[e._v("ETag")]),e._v(" 跟之前的没有变化。")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("当 "),t("code",[e._v("Last-Modified")]),e._v(" 和 "),t("code",[e._v("Etag")]),e._v(" 同时存在时，服务器会优先验证 "),t("code",[e._v("Etag")]),e._v("，一致的情况下会继续比对 "),t("code",[e._v("Last-Modified")]),e._v("，然后决定是否返回"),t("code",[e._v("304")])])]),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("当浏览器再次访问同一个资源时，会走如下的流程："),t("br"),e._v("\n1、 根据 "),t("code",[e._v("Expires")]),e._v(" 或 "),t("code",[e._v("Cache-Control")]),e._v(" 判断是否命中强缓存，命中则直接使用缓存；"),t("br"),e._v("\n2、 如果没有命中则携带 "),t("code",[e._v("If-Modified-Since")]),e._v(" 或 "),t("code",[e._v("If-None-Match")]),e._v(" 标识发送请求到服务端，确认是否命中协商缓存；"),t("br"),e._v("\n3、 如果命中协商缓存，服务器会返回 "),t("code",[e._v("304")]),e._v(" 告诉浏览器使用本地缓存；"),t("br"),e._v("\n4、 否则，浏览器返回正常状态码 "),t("code",[e._v("200")]),e._v(" 的响应以及响应体，同时可以附带上新的缓存指令，浏览器缓存新的内容；")])])}),[],!1,null,null,null);a.default=s.exports}}]);