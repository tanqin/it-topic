import type { NavbarConfig } from 'vuepress'

const navbar: NavbarConfig = [
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
        text: 'TypeScript',
        link: '/frontend/TypeScript/'
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
        text: '2025-08-14_金财互联',
        link: '/frontendInterview/2025-08-14_JCHL'
      },
      {
        text: '2025-08-14_通联支付',
        link: '/frontendInterview/2025-08-14_TLZF'
      },
      {
        text: '2025-08-13_LesPark',
        link: '/frontendInterview/2025-08-13_LesPark'
      },
      {
        text: '2025-08-12_精灵计算机',
        link: '/frontendInterview/2025-08-12_JLJSJ'
      },
      {
        text: '2025-08-12_广州感联',
        link: '/frontendInterview/2025-08-12_GZGL'
      },
      {
        text: '2025-08-12_广州智算',
        link: '/frontendInterview/2025-08-12_GZZS'
      },
      {
        text: '2025-08-08_华慧（广州）',
        link: '/frontendInterview/2025-08-08_HHGZ'
      },
      {
        text: '2025-08-07_金溪欣',
        link: '/frontendInterview/2025-08-07_JXX'
      },
      {
        text: '2023-04-07_飞项科技',
        link: '/frontendInterview/2023-04-07_FXKJ'
      },
      {
        text: '2023-04-07_乐博士中国',
        link: '/frontendInterview/2023-04-07_LBSZG'
      },
      {
        text: '2023-04-03_宏景科技',
        link: '/frontendInterview/2023-04-03_HJKJ'
      },
      {
        text: '2023-03-18_悠久商服',
        link: '/frontendInterview/2023-02-18_YJSF'
      },
      {
        text: '2023-03-15_普睿德利',
        link: '/frontendInterview/2023-03-15_PRDL'
      },
      {
        text: '2023-03-08_华微软件',
        link: '/frontendInterview/2023-03-08_HWRJ'
      },
      {
        text: '2023-03-07_宝露公司',
        link: '/frontendInterview/BLGS_2023-03-07'
      },
      {
        text: '2023-02-22_美盈智能',
        link: '/frontendInterview/2023-02-22_MYZN'
      },
      {
        text: '2023-02-21_中软国际',
        link: '/frontendInterview/2023-02-21_ZRGJ'
      }
    ]
  }
]

export default navbar
