module.exports = {
  title: '学习记录',
  dest: './docs/.vuepress/dist',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '记录', link: '/record/' },
      { text: 'about', link: '/about/' }
    ],
    // sidebar: 'auto',
    sidebar: {
      collapsable: false,
      siderbarDepth: 3,
      // {
      //   title: 'Guide',
      //   collapsable: false,
      //   // path: '/guide/',
      //   children: ['/guide/'],
      //   siderbarDepth: 2,
      // }
      '/record/': [
        '',
        'vue'
      ],
      '/about/': [
        ''
      ]
    }
  }
}