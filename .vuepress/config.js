const title = 'WikiEspírita'
const description = '"Generalidade e Concordância" no estudo e na divulgação da Doutrina Espírita!'

module.exports = {
  dest: './site',
  title: title,
  description: description,
  permalink: '/:slug',
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/imagens',
        '@logo': '/imagens/logo'
      }
    }
  },
  locales: {
    '/': {
      lang: 'pt-BR',
      title: title,
      description: description
    }
  },
  themeConfig: {
    editLinks: true,
    repo: 'wikiespirita/wikiespirita-site',
    logo: '/imagens/logo/wiki_espirita_logo_globo_420.png',
    navbar: true,
    search: true,
    searchMaxSuggestions: 10,
    locales: {
      '/': {
        label: 'Português',
        selectText: 'Português',
        editLinkText: 'Editar no GitHub',
        lastUpdated: 'Atualizado em'
      }
    },
    displayAllHeaders: true,
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Temas',
          items: [
            { text: 'Cremação', link: '/paginas/cremacao'}
          ]
        },
    ],
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          // return moment(timestamp).fromNow()
          return moment(timestamp).format('DD/MM/YYYY')
        }
      }
    ],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'SWUpdatePopup',
        updatePopup: true
      }
    ],
    ['@vuepress/blog'],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-70021489-1'
      }
    ]
  ],
  head: [
    ['link', { rel: 'icon', href: '/imagens/logo/favicon-32x32.png' }],
    ['meta', { property: 'og:url', content: 'https://wikiespirita.com.br'}],
    ['meta', { property: 'og:title', content: 'WikiEspírita'}],
    ['meta', { property: 'og:description', content: 'Generalidade e Concordância no estudo do Espiritismo'}],
    ['meta', { property: 'og:image', content: 'https://wikiespirita.com.br/imagens/logo/wiki_espirita_logo_globo_280.png'}],
    ['meta', { property: 'og:image:secure_url', content: 'https://wikiespirita.com.br/imagens/logo/wiki_espirita_logo_globo_280.png'}],
    ['meta', { property: 'og:type', content: 'article'}],
    ['meta', { property: 'og:locale', content: 'pt_BR'}],
    ['meta', { property: 'og:locale:alternative', content: 'en_US'}],
    ['meta', { property: 'og:image:width', content: '280' }],
    ['meta', { property: 'og:image:height', content: '280' }],
    ['link', { rel: 'manifest', href: 'https://wikiespirita.com.br/manifest.webmanifest'}]
  ]
}