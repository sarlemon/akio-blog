module.exports = {
  title: "Akio",
  description: "",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  base:'/akio-blog/',
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      // {
      //   text: "读书笔记",
      //   icon: "reco-message",
      //   link: "/docs/read-notes/",
      // },
      {
        text: "GitHub",
        link: "https://github.com/sarlemon",
        icon: "reco-github",
      },
    ],
    sidebar: {
      "/docs/read-notes/": [""],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 3,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    logo: "/avatar.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Akio",
    authorAvatar: "/avatar.png",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
