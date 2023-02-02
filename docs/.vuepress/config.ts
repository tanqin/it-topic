import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/it-topic/',
  lang: 'zh-CN',
  title: '技术题库',
  description: '收集 IT 方面的题库，为己所用',
  head: [['link', { rel: 'icon', href: '/imgs/favicon.svg' }]],
  theme: defaultTheme({
    repo: 'https://github.com/',
    editLink: false,
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
      }
    ],
    sidebar: 'auto'
  })
})
