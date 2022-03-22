export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Programs Games Android Free mobile tech news',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-4360588688411479',
        async: true
      }
    ]
  },

  link: [
    { 
    rel: 'stylesheet', 
    type: 'https://fonts.googleapis.com/css2?family=Merriweather&display=swap'
    },
    { 
      rel: 'stylesheet', 
      type: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap'
    }
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~layouts/global",
    '~/assets/scss/template',
    '~/assets/scss/variables',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" },
    { path: "/api/games/", handler: "~/api/index_games.js" },
/*     { path: "/games", handler: "~/api/games.js" } */
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    '@nuxtjs/axios',
    ['nuxt-buefy', {css: false, scss: false}],
    ['@nuxtjs/google-adsense'],
  ],
  'googleadsense': {
    id: 'ca-pub-4360588688411479'
  },

  proxy: {


    '/api': {
      target: 'https://www.freetogame.com/api/',
      pathRewrites: {
        '^/api' : '/'
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
