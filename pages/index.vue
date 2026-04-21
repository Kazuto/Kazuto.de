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

useSeoMeta({
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
})
</script>
