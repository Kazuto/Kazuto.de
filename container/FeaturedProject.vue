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
const content = await queryContent('/projects')
  .where({ featured: true })
  .findOne()
</script>
