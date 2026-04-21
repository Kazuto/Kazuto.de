<template>
  <main>
    <Hero />
    <FeaturedProject />
    <Skills />
    <Projects />
    <About />
    <Contact />
  </main>
</template>

<script setup>
const { locale } = useI18n()
const route = useRoute()

const siteUrl = 'https://kazuto.de'
const ogImageUrl = `${siteUrl}/images/og-image.png`

useSeoMeta({
  title: 'Kai Mayer - Full Stack Developer & Graphic Designer',
  description: 'Full-stack developer and graphic designer specializing in Vue.js, Nuxt, Laravel, and modern web technologies. Based in Mönchengladbach, Germany.',
  ogTitle: 'Kai Mayer - Full Stack Developer & Graphic Designer',
  ogDescription: 'Full-stack developer and graphic designer specializing in Vue.js, Nuxt, Laravel, and modern web technologies.',
  ogImage: ogImageUrl,
  ogUrl: `${siteUrl}${route.path}`,
  ogType: 'website',
  ogSiteName: 'Kazuto Portfolio',
  ogLocale: computed(() => locale.value === 'de' ? 'de_DE' : 'en_US'),
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kai Mayer - Full Stack Developer & Graphic Designer',
  twitterDescription: 'Full-stack developer and graphic designer specializing in Vue.js, Nuxt, Laravel, and modern web technologies.',
  twitterImage: ogImageUrl,
  twitterSite: '@dev_kazuto',
  twitterCreator: '@dev_kazuto',
})

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
  link: [
    {
      rel: 'canonical',
      href: computed(() => `${siteUrl}${route.path}`)
    },
    {
      rel: 'alternate',
      hreflang: 'de',
      href: siteUrl
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: siteUrl
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: siteUrl
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Kai Mayer',
        alternateName: 'Kazuto',
        jobTitle: 'Full Stack Developer & Graphic Designer',
        description: 'Full-stack developer and graphic designer specializing in Vue.js, Nuxt, Laravel, and modern web technologies.',
        url: siteUrl,
        image: ogImageUrl,
        sameAs: [
          'https://github.com/Kazuto',
          'https://www.linkedin.com/in/kai-mayer/',
          'https://twitter.com/dev_kazuto'
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mönchengladbach',
          addressCountry: 'DE'
        },
        knowsAbout: [
          'JavaScript',
          'TypeScript',
          'Vue.js',
          'Nuxt.js',
          'PHP',
          'Laravel',
          'Golang',
          'UI/UX Design',
          'Graphic Design',
          'Web Development'
        ]
      })
    }
  ]
})
</script>
