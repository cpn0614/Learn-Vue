module.exports = {
  title: '学习记录',
  dest: './docs/.vuepress/dist',
  head: [
    ['script', {
      src : 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      'data-ad-client': "ca-pub-9531008710311384",
      async: 'async'
    }]
  ],
  evergreen: true,
  description: 'Graduc,学习记录',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '记录', link: '/record/' },
      { text: '工具', link: '/tools/' },
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
        // 'vue',
        {
          title: 'js深入',
          collapsable: false,
          path: 'deepJavascript',
          // children: ['/guide/'],
          siderbarDepth: 2,
        },
        {
          title: '算法',
          collapsable: false,
          path: 'algorithm',
          // children: ['/guide/'],
          siderbarDepth: 2,
        },
        {
          title: 'webpack',
          collapsable: false,
          path: 'webpack',
          // children: ['/guide/'],
          siderbarDepth: 2,
        },
        {
          title: 'vue',
          collapsable: false,
          path: 'vue',
          // children: ['/guide/'],
          siderbarDepth: 2,
        },
        {
          title: 'react',
          collapsable: false,
          path: 'react',
          // children: ['/guide/'],
          siderbarDepth: 2,
        },
      ],
      '/tools/': [
        '',
        {
          title: '前端工具',
          description: '前端，工具',
          collapsable: false,
          path: 'tool',
          siderbarDepth: 3,
        }
      ],
      '/about/': [
        ''
      ]
    },
    lastUpdated: '上次更新：'
  }
}