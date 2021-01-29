module.exports = {
  title: "针不戳",
  description: "Hello, my friend!",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`,
      },
    ],
  ],
  base: '/blog/',
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "配置",
        collapsable: false,
        path: '/guide',   
        children: ["/guide/"],
      },
    ],
  },
};
