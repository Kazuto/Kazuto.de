<template>
  <nav class="bg-secondary-500 backdrop-blur-sm bg-opacity-95">
    <Container>
      <div class="flex items-center justify-between py-4">
        <!-- Logo/Brand -->
        <NuxtLink to="/" class="text-h4 text-primary-500 font-bold hover:opacity-80 transition-opacity">
          Kazuto
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <div class="flex gap-6">
            <component
              v-for="item in items"
              :key="item.name"
              :is="item.target.startsWith('#') ? 'a' : 'NuxtLink'"
              :to="item.target.startsWith('#') ? undefined : item.target"
              :href="item.target.startsWith('#') ? item.target : undefined"
              class="text-body2 text-white hover:text-primary-500 transition-colors font-medium"
            >
              {{ item.name }}
            </component>
          </div>

          <!-- Language Switcher -->
          <LanguageSwitcher />
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggle"
          class="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!open"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </Container>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})

const { open, toggle } = useHeader()
</script>
