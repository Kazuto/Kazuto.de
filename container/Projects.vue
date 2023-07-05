<template>
  <Section id="portfolio" class="min-h-fit z-10 py-20 md:py-16">
    <Container>
      <Project v-for="project in projects" :key="project.id" :item="project"></Project>
    </Container>
  </Section>
</template>

<script setup>
const projectStore = useProjectStore()

const projects = computed(() => projectStore.getNonFeatured)
</script>
