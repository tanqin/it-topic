import type { NavbarConfig } from 'vuepress'

const navbar:NavbarConfig =  [
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
        text: '飞项科技(2023-04-07)',
        link: '/frontendInterview/FXKJ_2023-04-07'
      },
      {
        text: '乐博士中国(2023-04-07)',
        link: '/frontendInterview/LBSZG_2023-04-07'
      },
      {
        text: '宏景科技(2023-04-03)',
        link: '/frontendInterview/HJKJ_2023-04-03'
      },
      {
        text: '悠久商服(2023-03-18)',
        link: '/frontendInterview/YJSF_2023-02-18'
      },
      {
        text: '普睿德利(2023-03-15)',
        link: '/frontendInterview/PRDL_2023-03-15'
      },
      {
        text: '华微软件(2023-03-08)',
        link: '/frontendInterview/HWRJ_2023-03-08'
      },
      {
        text: '宝露公司(2023-03-07)',
        link: '/frontendInterview/BLGS_2023-03-07'
      },
      {
        text: '美盈智能(2023-02-22)',
        link: '/frontendInterview/MYZN_2023-02-22'
      },
      {
        text: '中软国际(2023-02-21)',
        link: '/frontendInterview/ZRGJ_2023-02-21'
      }
    ]
  }
]

export default navbar