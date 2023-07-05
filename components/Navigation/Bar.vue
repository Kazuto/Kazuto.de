<template>
  <nav id="navigation" class="bg-secondary-500 transition ease-cubic-bezier duration-500" role="navigation"
    aria-label="Navigation">
    <Container class="py-4 flex space-between items-center">
      <NavigationBrand />

      <div class="flex-grow" />

      <ul class="hidden sm:flex sm:gap-8">
        <li v-for="(link, idx) in items" :key="idx">
          <NavigationLink :link="link"></NavigationLink>
        </li>
      </ul>

      <NavigationBurger />
    </Container>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
