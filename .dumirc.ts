import {defineConfig} from 'dumi'

export default defineConfig({
  base: '/slow-admin-doc/',
  publicPath: '/slow-admin-doc/',
  themeConfig: {
    name: 'slow admin',
    logo: '/slow-admin-doc/logo.png',
    footer: '<br>',
    nav: [
      {
        title: '📖 文档',
        link: '/docs',
      },
      {
        title: '🌵 更新记录',
        link: '/change-log',
      },
      {
        title: '🤔 常见问题',
        link: '/issue',
      },
      {
        title: '👀 演示站点',
        link: 'http://admin-demo.slowlyo.top',
      }
    ]
  },
  favicons: ['/slow-admin-doc/logo.png'],
})
