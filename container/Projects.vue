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

const { data: content, refresh } = await useAsyncData(
  'projects',
  () => queryContent(`/${locale.value}/projects`)
    .where({ featured: false })
    .find()
)

watch(locale, () => {
  refresh()
})
</script>
