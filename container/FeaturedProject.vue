<template>
  <Section>
    <Container>
      <Project v-if="project" :item="project"></Project>
    </Container>
  </Section>
</template>

<script setup>
const projectStore = useProjectStore()

const project = computed(() => projectStore.getFeatured)
</script>

<style lang="scss" scoped>
.section {
  min-height: auto;
  z-index: 1;

  padding: 5rem 0;

  @include bp(md) {
    padding: 4rem 0;
  }
}

.project {
  @include bp(md) {
    transform: translateY(6rem);
  }
}
</style>

<style lang="scss"></style>
