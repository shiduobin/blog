module.exports = {
  title: "心之所向",
  description: "Just Do It",
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
    "vuepress-plugin-code-copy": false,
    run: {
      height: "auto",
    },
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
  // theme: 'vuepress-theme-antdocs',
  themeConfig: {
    type: "blog",
    author: "shiduobin",
    authorAvatar: "/favicon.ico",
    startYear: "2020",
    lastUpdated: "最后更新时间",
    codeTheme: "funky",
    // 博客配置
    blogConfig: {
      category: {
        location: 1, // 在导航栏菜单中所占的位置，默认2
        text: "Category",
      },
      tag: {
        location: 2,
        text: "Tag",
      },
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "基本概念",
        link: "/base/restful",
      },
      {
        text: "每日•壹题",
        link: "/question/01",
      },
      {
        text: "算法",
        link: "/algorithm/concept",
      },

      {
        text: "学习",
        items: [
          { text: "JS基础", link: "/study/js/promise" },
          { text: "CSS基础", link: "/study/css/selected" },
        ],
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
    },
  },
};
