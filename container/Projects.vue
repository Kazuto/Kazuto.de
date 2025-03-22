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
const content = await queryContent('/projects')
  .where({ featured: false })
  .find()
</script>
