<template>
  <h1
    :id="id"
    class="mb-8 text-4xl font-bold"
  >
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

defineProps<{ id?: string }>()

const heading = 1
const { anchorLinks } = config.public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
