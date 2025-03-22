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
useSeoMeta({
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
