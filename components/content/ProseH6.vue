<template>
  <h6 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h6>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

defineProps<{ id?: string }>()

const heading = 6
const { anchorLinks } = config.public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<style lang="postcss" scoped>
h6 {
  @apply mt-2 mb-0.5 text-base font-bold;

  a:before {
    content: '# ';
    @apply text-primary;
  }
}
</style>
