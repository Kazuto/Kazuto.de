<template>
  <nav id="navigation" class="bg-secondary-500 transition ease-cubic-bezier duration-500" role="navigation"
    aria-label="Navigation">
    <Container class="py-4 flex space-between items-center">
      <NavigationNavBrand />

      <div class="flex-grow" />

      <ul class="hidden sm:flex sm:gap-8">
        <li v-for="(link, idx) in items" :key="idx">
          <NavLink :link="link"></NavLink>
        </li>
      </ul>

      <NavigationNavBurger />
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
