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
    type: "blog",
    author: "shiduobin",
    authorAvatar: "/favicon.ico",
    startYear: "2020",
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
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
