import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/git-projects/nps-new/nps-docs/vuepress-starter/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._df7309e75fc5a0125c40119efc25ecea/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/git-projects/nps-new/nps-docs/vuepress-starter/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._df7309e75fc5a0125c40119efc25ecea/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/git-projects/nps-new/nps-docs/vuepress-starter/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._df7309e75fc5a0125c40119efc25ecea/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'D:/git-projects/nps-new/nps-docs/vuepress-starter/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._df7309e75fc5a0125c40119efc25ecea/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import 'D:/git-projects/nps-new/nps-docs/vuepress-starter/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._df7309e75fc5a0125c40119efc25ecea/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
