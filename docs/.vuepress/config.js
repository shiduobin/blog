module.exports = {
  title: "博客",
  description: "个人随记📒",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`,
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
  },
  theme: "vuepress-theme-reco",
  // theme: 'vuepress-theme-antdocs',
  themeConfig: {
    lastUpdated: "最后更新时间",
    author: "shiduobin",
    startYear: "2020",
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
        link: "/algorithm/605",
      },

      {
        text: "学习",
        items: [
          { text: "JS基础", link: "/study/js/promise" },
          { text: "CSS基础", link: "/study/css/selected" },
        ],
      },
    ],
    displayAllHeaders: true,
    sidebarDepth: 3,
    sidebar: {
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
          ],
        },
        {
          title: "CSS",
          collapsable: true,
          children: [{ title: "选择器", path: "/study/css/selected" }],
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
        { title: "种花问题", path: "/algorithm/605" },
        { title: "千分位", path: "/algorithm/1556" },
      ],
    },
  },
};
