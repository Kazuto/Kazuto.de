<template>
  <nav
    id="navigation"
    class="bg-secondary-500 ease-cubic-bezier transition duration-500"
    role="navigation"
    aria-label="Navigation"
  >
    <Container class="space-between flex items-center py-4">
      <NavigationBrand />

      <div class="grow" />

      <ul class="hidden sm:flex sm:gap-8">
        <li
          v-for="(link, idx) in items"
          :key="idx"
        >
          <NavigationLink :link="link"></NavigationLink>
        </li>
      </ul>

      <NavigationBurger />
    </Container>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
