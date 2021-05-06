module.exports = {
  title: "心之所向，素履以往",
  description: "生如逆旅，一苇以航",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css",
      },
    ],
  ],
  base: "/blog/",
  dest: "./docs/.vuepress/dist",
  plugins: {
    // 添加复制代码按钮
    "vuepress-plugin-code-copy": false,
    // 在线运行 Vue 单文件
    run: {
      height: "auto",
    },
    // 切换页面的时候，在顶部显示进度条
    "vuepress-plugin-nprogress": true,
    // 自动生成侧边栏
    autobar: false,
    // 功能代码展示插件，展示多种语言于一窗，增加易读性
    "@vuepress-reco/extract-code": true,
  },
  markdown: {
    lineNumbers: false,
    extendMarkdown: (md) => {
      md.set({
        html: true,
      });
      md.use(require("markdown-it-katex"));
    },
  },
  theme: "vuepress-theme-reco",
  themeConfig: {
    type: "blog",
    author: "shiduobin",
    authorAvatar: "/favicon.ico",
    startYear: "2020",
    lastUpdated: "Last Updated", // string | boolean
    // 博客配置
    blogConfig: {
      tag: {
        location: 7,
        text: "Tag",
      },
      category: {
        location: 8, // 在导航栏菜单中所占的位置
        text: "Category",
      },
    },
    nav: [
      { text: "Home", link: "/" },
      // {
      //   text: "每日•壹题",
      //   link: "/question/01",
      // },
      {
        text: "学习",
        items: [
          { text: "JS基础", link: "/study/js/promise" },
          { text: "CSS基础", link: "/study/css/selected" },
        ],
      },
      {
        text: "算法",
        link: "/algorithm/concept",
      },
      {
        text: "基本概念",
        link: "/base/restful",
      },
      {
        text: "随记",
        link: "/notes/contentLength",
      },
    ],
    subSidebar: "auto",
    displayAllHeaders: false,
    sidebarDepth: 2,
    sidebar: {
      "/base/": [
        {
          title: "RESTful架构",
          path: "/base/restful",
        },
      ],
      "/study/": [
        {
          title: "JS",
          collapsable: true,
          children: [
            {
              title: "promise",
              path: "/study/js/promise",
            },
            { title: "reduce", path: "/study/js/reduce" },
            { title: "repeat", path: "/study/js/repeat" },
            { title: "this", path: "/study/js/this" },
            { title: "事件总线", path: "/study/js/eventbus" },
          ],
        },
        {
          title: "CSS",
          collapsable: true,
          children: [
            { title: "选择器", path: "/study/css/selected" },
            { title: "BEM", path: "/study/css/bem" },
            { title: "REM", path: "/study/css/rem" },
            { title: "BFC", path: "/study/css/bfc" },
            { title: "重绘&回流", path: "/study/css/Repaint&Reflow" },
          ],
        },
      ],
      "/question/": [
        {
          title: "第一题",
          collapsable: true,
          path: "/question/01",
        },
      ],
      "/algorithm/": [
        {
          title: "名词解释",
          path: "/algorithm/concept",
        },
        { title: "两数相加", path: "/algorithm/02" },
        { title: "种花问题", path: "/algorithm/605" },
        { title: "千分位", path: "/algorithm/1556" },
        { title: "无重复字符的最长子串", path: "/algorithm/03" },
      ],
      "/notes/": [
        {
          title: "Content-Length",
          path: "/notes/contentLength",
        },
        {
          title: "transition & animation",
          path: "/notes/tran",
        },
      ],
      "/vue/": [
        {
          title: "路由懒加载",
          path: "/vue/lazyRouter",
        },
      ],
    },
  },
};
