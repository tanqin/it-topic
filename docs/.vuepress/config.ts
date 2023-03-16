import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
const base = '/it-topic/'

export default defineUserConfig({
  base,
  lang: 'zh-CN',
  title: '技术题库',
  description: '收集 IT 方面的题库，为己所用',
  head: [['link', { rel: 'icon', href: base + 'imgs/favicon.svg' }]],
  theme: defaultTheme({
    repo: 'https://github.com/',
    editLink: false,
    lastUpdated: false,
    navbar: [
      {
        text: '前端',
        link: '/frontend/',
        children: [
          {
            text: 'HTML',
            link: '/frontend/HTML/'
          },
          {
            text: 'CSS',
            link: '/frontend/CSS/'
          },
          {
            text: 'JavaScript',
            link: '/frontend/JavaScript/'
          },
          {
            text: 'Vue',
            link: '/frontend/Vue/'
          },
          {
            text: 'React',
            link: '/frontend/React/'
          },
          {
            text: 'Node',
            link: '/frontend/Node/'
          },
          {
            text: 'Webpack',
            link: '/frontend/Webpack/'
          }
        ]
      },
      {
        text: '后端',
        children: [
          {
            text: 'Java',
            link: '/backend/Java/'
          },
          {
            text: 'Python',
            link: '/backend/Python/'
          }
        ]
      },
      {
        text: '前端面试',
        children: [
          {
            text: '普睿德利',
            link: '/interview/PRDL'
          }
        ]
      }
    ],
    sidebar: 'auto'
  }),
  plugins: [
    () =>
      searchPlugin({
        locales: {
          '/': {
            placeholder: '搜索'
          }
        }
      })
  ]
})
