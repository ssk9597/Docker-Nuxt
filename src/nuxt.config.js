const environment = process.env.NODE_ENV || 'development';

export default {
  mode: 'spa',
  head: {
    title: 'src',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://static.line-scdn.net/liff/edge/2/sdk.js' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
  ],

  generate: {
    interval: 2000,
  },

  env: {
    LIFF_ID: process.env.LIFF_ID,
    API_URL: process.env.API_URL,
    API_BROWSER_URL: process.env.API_BROWSER_URL,
  },

  watchers: {
    webpack: {
      poll: true,
    },
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/dotenv'],

  proxy: {
    '/api': environment === 'development' ? process.env.API_URL : 'https://www.example.org',
  },

  axios: {
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_BROWSER_URL,
    credentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
