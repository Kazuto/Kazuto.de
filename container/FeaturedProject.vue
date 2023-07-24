<template>
  <Section
    id="featured"
    class="z-10 z-50 px-0 py-20 md:py-16"
  >
    <Container>
      <Project
        v-if="project"
        class="md:translate-y-24"
        :item="project"
      ></Project>
    </Container>
  </Section>
</template>

<script setup>
const projectStore = useProjectStore()

const project = computed(() => projectStore.getFeatured)
</script>
