<template>
  <transition name="overlay">
    <nav
      v-if="isMenuOpen"
      class="absolute top-0 left-0 w-full h-screen bg-secondary-500 overflow-x-hidden px-10 z-10"
      :class="{ 'opacity-100': isMenuOpen }"
      role="navigation"
      aria-label="Navigation"
    >
      <Container class="flex justify-end items-center">
        <ul class="h-full list-none text-right">
          <li v-for="(link, index) in items" :key="index" class="my-6">
            <NavigationLink
              class="text-3xl"
              :link="link"
              @click="toggleMenu()"
            />
          </li>
        </ul>
        <ul class="social__list" />
      </Container>
    </nav>
  </transition>
</template>

<script setup>
const headerStore = useHeaderStore()

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  headerHeight: {
    type: Number,
    default: 0,
  },
})

const isMenuOpen = computed(() => headerStore.getMenuState)

const toggleMenu = () => {
  headerStore.toggleMenu()
}
</script>

<style lang="postcss" scoped>
.overlay-enter-active {
  animation: fade-from-top 300ms ease-in-out;
}

.overlay-leave-active {
  animation: fade-from-top 300ms ease-in-out reverse;
}

@keyframes fade-from-top {
  0% {
    opacity: 0;
    transform: translate(0, -20%);
  }

  40% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
