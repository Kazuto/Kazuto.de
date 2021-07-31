export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Kazuto - Full Stack Developer & Graphic Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Kazuto - Full Stack Developer & Graphic Designer',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Kai Mayer has graduated as a graphic designer in Germany and has been a full stack developer and graphic designer since 2015.',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Kai Mayer has graduated as a graphic designer in Germany and has been a full stack developer and graphic designer since 2015.',
      },
      { hid: 'author', name: 'author', content: 'Kai Mayer' },
      { hid: 'copyright', name: 'copyright', content: 'Kai Mayer' },
      { hid: 'publisher', name: 'publisher', content: 'Kai Mayer' },
      { hid: 'author', name: 'author', content: 'Kai Mayer' },
      { hid: 'page-topic', name: 'page-topic', content: 'Portfolio' },
      { hid: 'page-type', name: 'page-type', content: 'Private Homepage' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Full, Stack, Developer, Graphic, Designer, Kai, Mayer, Hillemacher, Kazuto, Deutschland, Blog, Gestaltungstechnischer, Assistent, Ausbildung, Mediengestalter',
      },
      { hid: 'audience', name: 'audience', content: 'all' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Kazuto - Full Stack Developer & Graphic Designer',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Kai Mayer is a Full-Stack Developer and Graphic Designer from Germany.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://kazuto.de/logo.png',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@dev_kazuto' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@dev_kazuto',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~plugins/cosmic.js', '~/plugins/lazysizes.client.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: ['~/components/', '~/container/'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-responsive-loader',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },
  /*
   ** Runtime Config
   ** See https://nuxtjs.org/guide/runtime-config/
   */
  publicRuntimeConfig: {
    cosmicBucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
    cosmicReadKey: process.env.COSMIC_READ_KEY || '',
    emailjsUserId: process.env.EMAILJS_USER_ID || '',
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID || '',
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID || '',
  },
  /*
   ** PWA configuration
   ** See https://pwa.nuxtjs.org/
   */
  pwa: {
    manifest: {
      name: 'Kazuto - Full Stack Developer & Graphic Designer',
      short_name: 'Kazuto',
      start_url: './index.html',
      display: 'standalone',
      background_color: '#142534',
      theme_color: '#ff9900',
    },
  },
  /*
   ** Global style resources configuration
   ** See https://github.com/nuxt-community/style-resources-module/
   */
  styleResources: {
    scss: [
      // Global variables, site-wide settings, config switches, etc
      '@/assets/scss/mixins.scss',
      '@/assets/scss/vars.scss',
    ],
  },
  /*
   ** Nuxt Responsive Loader configuration
   ** See https://github.com/geeogi/nuxt-responsive-loader
   */
  responsiveLoader: {
    name: 'images/[name]-[width].[ext]',
    sizes: [320, 640, 768, 960, 1024, 1280, 1600, 1920, 2560, 3840],
    quality: 85,
    adapter: require('responsive-loader/sharp'),
  },
}
