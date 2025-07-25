export const redirects = JSON.parse("{\"/notes/get-started.html\":\"/article/s48xvtrl/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/s48xvtrl/", { loader: () => import(/* webpackChunkName: "article_s48xvtrl_index.html" */"D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/article/s48xvtrl/index.html.js"), meta: {"title":"快速开始"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);
