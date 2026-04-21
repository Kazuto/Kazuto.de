<template>
  <Section
    id="featured"
    class="z-10 px-0 py-20 md:py-16"
  >
    <Container>
      <Project
        v-if="content"
        class="md:translate-y-24"
        :item="content"
      ></Project>
    </Container>
  </Section>
</template>

<script setup>
const { locale } = useI18n()

const { data: content } = await useAsyncData(
  `featured-project-${locale.value}`,
  () => queryContent(`/${locale.value}/projects`)
    .where({ featured: true })
    .findOne()
)

watch(locale, () => {
  refreshNuxtData(`featured-project-${locale.value}`)
})
</script>
