import comp from "D:/git-projects/nps-new/nps-docs/vuepress-starter/my-project/docs/.vuepress/.temp/pages/notes/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/notes/get-started.html\",\"title\":\"快速开始\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"快速开始\"},\"readingTime\":{\"minutes\":1.75,\"words\":526},\"git\":{},\"filePathRelative\":\"notes/get-started.md\",\"headers\":[],\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10000,\"name\":\"notes\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
