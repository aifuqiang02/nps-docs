import comp from "D:/git-projects/nps-new/nps-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"网跃通\",\"tagline\":\"下一代内网穿透服务\",\"text\":\"基于 NPS 优化的轻量级内网穿透工具，高性能无限制。无映射数量、带宽、有效期限制，按量计费 0.8 元/GB，最低充值 0.8 元。\",\"actions\":[{\"theme\":\"brand\",\"text\":\"快速开始\",\"link\":\"/notes/get-started.md\"}]}}]},\"readingTime\":{\"minutes\":0.28,\"words\":85},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
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
