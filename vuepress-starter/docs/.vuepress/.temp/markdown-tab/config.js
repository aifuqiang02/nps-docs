import { CodeTabs } from "D:/git-projects/nps-new/nps-docs/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_cec26c5b52c74a4172cdef01a3f488a6/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/git-projects/nps-new/nps-docs/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_cec26c5b52c74a4172cdef01a3f488a6/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/git-projects/nps-new/nps-docs/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_cec26c5b52c74a4172cdef01a3f488a6/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
