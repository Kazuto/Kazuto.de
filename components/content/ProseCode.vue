<template>
  <div
    :filename="filename"
    class="group relative font-mono text-sm"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array,
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})
</script>

<style lang="postcss">
div[class*='language-'] {
  &::after {
    @apply text-secondary-500 dark:text-secondary-400 pointer-events-none absolute top-2 right-2 h-full w-full text-right content-[attr(filename)] select-none;
  }

  pre {
    @apply bg-secondary-100 dark:bg-secondary-700 my-2 rounded px-1 py-4;

    code .line {
      @apply relative block min-h-[1rem] pl-12;

      &.highlight {
        @apply bg-opacity-10 dark:bg-opacity-10 bg-black dark:bg-white;
      }

      &::before {
        @apply text-secondary-500 dark:text-secondary-300 pointer-events-none absolute top-0 -left-2 w-12 pr-3 text-right content-[attr(line)];
      }
    }
  }
}
</style>
