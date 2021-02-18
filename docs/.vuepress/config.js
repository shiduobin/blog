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
  plugins: [['vuepress-plugin-code-copy', true]],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "学习",
        items: [
          { text: "JS基础", link: "/study/js/promise" },
          { text: "CSS基础", link: "/study/css/math01" },
        ],
      },
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: {
      "/study/": [
        {
          title: "JS",
          collapsable: false,
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
          collapsable: false,
          children: [
            { title: "第一节", path: "/study/css/math01" },
            { title: "第二节", path: "/study/css/math02" },
            { title: "第三节", path: "/study/css/math03" },
          ],
        },
      ],
    },
  },
};
