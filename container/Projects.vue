<template>
  <Section
    id="portfolio"
    class="z-10 min-h-fit py-20 md:py-16"
  >
    <Container>
      <Project
        v-for="(project, index) in content"
        :key="index"
        :item="project"
      ></Project>
    </Container>
  </Section>
</template>

<script setup>
const { locale } = useI18n()

const { data: content } = await useAsyncData(
  `projects-${locale.value}`,
  () => queryContent(`/${locale.value}/projects`)
    .where({ featured: false })
    .find()
)

watch(locale, () => {
  refreshNuxtData(`projects-${locale.value}`)
})
</script>
