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
  plugins: [["vuepress-plugin-code-copy", true]],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "每日•壹题",
        link: "/question/01",
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
    sidebarDepth: 2,
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
          children: [
            { title: "选择器", path: "/study/css/selected" },
            { title: "第二节", path: "/study/css/math02" },
            { title: "第三节", path: "/study/css/math03" },
          ],
        },
      ],
      "/question/": [
        {
          title: "第一题",
          collapsable: false,
          path: "/question/01"
        }
      ],
    },
  },
};
