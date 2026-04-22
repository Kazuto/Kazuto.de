<template>
  <h2
    :id="id"
    class="mt-14 mb-8 text-3xl font-normal"
  >
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

defineProps<{ id?: string }>()

const heading = 2
const { anchorLinks } = config.public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
