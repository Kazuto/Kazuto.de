<template>
  <Section>
    <Container>
      <Project
        v-for="project in projects"
        :key="project.id"
        :item="project"
      ></Project>
    </Container>
  </Section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.getters['projects/getNonFeatured']
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

  .project + .project {
    margin-top: $spacer * 5;
  }
}
</style>
