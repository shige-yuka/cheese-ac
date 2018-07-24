module.exports = {
  head: {
    titleTemplate: 'チーズアカデミー',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '世界を変えるチーズを作ろう。チーズアカデミーは、チーズ職人を養成するための学校です。' },
      { name: 'robots', content: 'noindex,nofollow,noarchive' },
      { property: 'og:title', content: 'チーズアカデミー' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '#' },
      { property: 'og:site_name', content: 'チーズアカデミー' },
      { property: 'og:description', content: '世界を変えるチーズを作ろう。チーズアカデミーは、チーズ職人を養成するための学校です。' },
      { property: 'format-detection', content: 'telephone=no' },
      { property: 'format-detection', content: 'telephone=no' },
    ],
  },
  link: [ //linkタグ関連
    { rel: 'icon', href: '/favicon.ico' }
  ],
  css: [
    // プロジェクト内の CSS ファイル
    '@/assets/css/reset.css',
    '@/assets/css/sanitize.css',
  ],
  loading: {
    color: '#3B8070'
  }
}
