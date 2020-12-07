<template>
  <Section>
    <Container>
      <Project :item="project"></Project>
    </Container>
  </Section>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.getters['projects/getFeatured'][0]
    },
  },
}
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
