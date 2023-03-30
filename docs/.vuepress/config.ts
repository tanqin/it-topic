import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import navbar from './navbar';
const base = '/it-topic/'


export default defineUserConfig({
  base,
  lang: 'zh-CN',
  title: '技术题库',
  description: '收集 IT 方面的题库，为己所用',
  head: [['link', { rel: 'icon', href: base + 'imgs/favicon.svg' }]],
  markdown: {
    headers: {
      level: [2, 3, 6]
    }
  },
  theme: defaultTheme({
    repo: 'https://github.com/',
    editLink: false,
    lastUpdated: false,
    navbar: navbar,
    sidebar: 'auto',
    sidebarDepth: 3
  }),
  plugins: [searchProPlugin({
      hotReload: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `Tag: $content`,
        },
      ],
  })]
})
