<template>
  <blockquote
    class="border-l-secondary-200 bg-secondary-100 dark:border-l-secondary-700 dark:bg-secondary-800 relative mb-4 rounded border-l-4 px-4 py-2 italic"
  >
    <slot />
  </blockquote>
</template>

<style lang="postcss">
blockquote {
  > p {
    @apply !mb-0;
  }
}
</style>
