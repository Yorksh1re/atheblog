export const state = () => ({
  menu: [
    {
      name: "博客",
      path: "/",
      icon: "blog",
      children: [
        {
          name: "推荐",
          path: "/",
          icon: "recommend"
        },
        {
          name: "Java",
          path: "/blog/java",
          icon: "java"
        },
        {
          name: "Python",
          path: "/blog/python",
          icon: "python"
        },
        {
          name: "Go",
          path: "/blog/go",
          icon: "golang"
        },
        {
          name: "TypeScript",
          path: "/blog/typescript",
          icon: "type-script"
        },
        {
          name: "工具",
          path: "/blog/utils",
          icon: "util"
        },
        {
          name: "杂谈",
          path: "/blog/gossip",
          icon: "gossip"
        }
      ]
    },
    {
      name: "开源",
      path: "/open-source",
      icon: "open-source"
    },
    {
      name: "关于作者",
      path: "/about",
      icon: "Yorkshire"
    }
  ]
});

export const mutations = {
  setMenu(state, menu) {
    state.menu = menu;
  },
  getMenu(state, menu) {
    return state.menu;
  },
  removeMenu(state) {
    state.menu = [];
  }
};
