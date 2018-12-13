const title = 'WikiEspírita'
const description = '"Generalidade e Concordância" no estudo e na divulgação da Doutrina Espírita!'

module.exports = {
  dest: './site',
  title: title,
  description: description,
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
        editLinkText: 'Editar',
        lastUpdated: 'Atualizado em'
      }
    },
    displayAllHeaders: true,
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Livros',
          items: [
            { text: 'Kardec', items: [
              { text: 'O Livro dos Espíritos', link: '/livros/kardec/o_livro_dos_espiritos.pdf' },
              { text: 'O Livro dos Médiuns', link: '/livros/kardec/o_livro_dos_mediuns.pdf' },
              { text: 'Evangelho Segundo o Espiritismo', link: '/livros/kardec/evangelho_segundo_o_espiritismo.pdf' },
              { text: 'O Céu e o Inferno', link: '/livros/kardec/o_ceu_e_o_inferno.pdf' },
              { text: 'A Gênese', link: '/livros/kardec/a_genese.pdf' },
              { text: 'Obras Póstumas', link: '/livros/kardec/obras_postumas.pdf' },
              { text: 'O que é o Espiritismo', link: '/livros/kardec/o_que_e_o_espiritismo.pdf' }
            ]},
            { text: 'Chico', items: '/livros/chico/obras' }
          ]
        }
    ],
    sidebar: [
        '/',
        '/pages/sobre',
        ['/pages/teste', 'Teste de Página'],
        ['/pages/code', 'Códigos'],
        {
            title: 'Group 1',
            collapsable: false,
            children: [
                '/'
            ]
        },
        {
            title: 'Group 2',
            children: [
                '/pages/sobre',
                'pages/codigo'
            ]
        }
    ]
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
    ['@vuepress/pwa']
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