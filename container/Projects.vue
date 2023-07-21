<template>
  <Section
    id="portfolio"
    class="z-10 min-h-fit py-20 md:py-16"
  >
    <Container>
      <Project
        v-for="project in projects"
        :key="project.id"
        :item="project"
      ></Project>
    </Container>
  </Section>
</template>

<script setup>
const projectStore = useProjectStore()

const projects = computed(() => projectStore.getNonFeatured)
</script>
