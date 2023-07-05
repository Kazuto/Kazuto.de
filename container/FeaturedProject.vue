<template>
  <Section id="featured" class="z-10 py-20 md:py-16 px-0">
    <Container>
      <Project v-if="project" class="md:translate-y-24" :item="project"></Project>
    </Container>
  </Section>
</template>

<script setup>
const projectStore = useProjectStore()

const project = computed(() => projectStore.getFeatured)
</script>
