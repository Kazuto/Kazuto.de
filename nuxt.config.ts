export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },

  app: {
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
  },

  build: {
    transpile: ['gsap'],
  },

  components: ['~/components/', '~/container/'],
  css: ['~/assets/css/app.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ['store'],
  },

  modules: [
    '@nuxt/image',
    '@nuxt/content',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],

  image: {
    dir: 'assets/images',
  },

  // pwa: {
  //   manifest: {
  //     name: 'Kazuto - Full Stack Developer & Graphic Designer',
  //     short_name: 'Kazuto',
  //     start_url: './index.html',
  //     display: 'standalone',
  //     background_color: '#142534',
  //     theme_color: '#ff9900',
  //   },
  // },
  runtimeConfig: {
    public: {
      cosmicBucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
      cosmicReadKey: process.env.COSMIC_READ_KEY || '',
      emailjsUserId: process.env.EMAILJS_USER_ID || '',
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID || '',
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID || '',
    },
  },

  devtools: {
    enabled: true,
  },
})
