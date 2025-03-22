<template>
  <transition name="overlay">
    <nav
      v-if="open"
      class="bg-secondary-500 absolute top-0 left-0 z-10 h-screen w-full overflow-x-hidden px-10"
      :class="{ 'opacity-100': open }"
      role="navigation"
      aria-label="Navigation"
    >
      <Container class="flex h-full items-center justify-end">
        <ul class="list-none text-right">
          <li
            v-for="(link, index) in items"
            :key="index"
            class="my-6"
          >
            <NavigationLink
              class="text-3xl"
              :link="link"
              @click="toggle"
            />
          </li>
        </ul>
        <ul class="social__list" />
      </Container>
    </nav>
  </transition>
</template>

<script setup>
const {toggle, open} = useHeader()

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
