<template>
  <Transition name="slide-fade">
    <div
      v-if="open"
      class="fixed inset-0 bg-secondary-500 z-40 md:hidden"
      :style="{ top: `${headerHeight}px` }"
    >
      <Container class="py-8">
        <nav class="flex flex-col gap-6">
          <component
            v-for="item in items"
            :key="item.name"
            :is="item.target.startsWith('#') ? 'a' : 'NuxtLink'"
            :to="item.target.startsWith('#') ? undefined : item.target"
            :href="item.target.startsWith('#') ? item.target : undefined"
            @click="toggle"
            class="text-h4 text-white hover:text-primary-500 transition-colors font-medium"
          >
            {{ item.name }}
          </component>

          <!-- Language Switcher in Mobile Menu -->
          <div class="mt-8 pt-8 border-t border-gray-700">
            <p class="text-body3 text-gray-400 mb-4">Language / Sprache</p>
            <LanguageSwitcher />
          </div>
        </nav>
      </Container>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  },
  headerHeight: {
    type: Number,
    default: 0
  }
})

const { open, toggle } = useHeader()
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
