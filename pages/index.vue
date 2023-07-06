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
const projectStore = useProjectStore()
const skillsStore = useSkillsStore()

onMounted(async () => {
  await projectStore.fetch()
  await skillsStore.fetch()
})

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
