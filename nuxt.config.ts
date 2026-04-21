import tailwindcss from '@tailwindcss/vite'

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
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Kazuto Portfolio' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'de_DE' },
        {
          property: 'og:title',
          content: 'Kazuto - Full Stack Developer & Graphic Designer',
        },
        {
          name: 'description',
          content:
            'Kai Mayer has graduated as a graphic designer in Germany and has been a full stack developer and graphic designer since 2015.',
        },
        {
          property: 'og:description',
          content:
            'Full-stack developer and graphic designer specializing in Vue.js, Nuxt, Laravel, and modern web technologies. Based in Mönchengladbach, Germany.',
        },
        { property: 'og:image', content: 'https://kazuto.de/images/og-image.png' },
        { property: 'og:url', content: 'https://kazuto.de' },
        { name: 'author', content: 'Kai Mayer' },
        { name: 'copyright', content: 'Kai Mayer' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        {
          name: 'twitter:title',
          content: 'Kazuto - Full Stack Developer & Graphic Designer',
        },
        {
          name: 'twitter:description',
          content:
            'Kai Mayer is a Full-Stack Developer and Graphic Designer from Germany.',
        },
        {
          name: 'twitter:image',
          content: 'https://kazuto.de/images/logo.png',
        },
        { name: 'twitter:site', content: '@dev_kazuto' },
        {
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

  imports: {
    dirs: ['store'],
  },

  modules: ['@nuxt/image', '@nuxt/content', '@nuxt/eslint', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
    ],
    defaultLocale: 'de',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
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
    // Server-side only (private)
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    smtpTo: process.env.SMTP_TO || '',

    public: {
      // Keep old EmailJS config for reference (can be removed later)
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY || '',
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID || '',
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID || '',
    },
  },

  devtools: {
    enabled: true,
  },

  vite: {
    build: {
      minify: true,
    },
    plugins: [tailwindcss()],
  },

  compatibilityDate: '2025-03-22',
})
