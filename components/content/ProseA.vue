<template>
  <NuxtLink
    :href="href"
    :target="target || (isExternal ? '_blank' : undefined)"
    class="text-primary-500 hover:text-primary-800 inline-block"
  >
    <Icon
      v-if="isExternal"
      name="heroicons:arrow-top-right-on-square"
      class="mr-0.5 mb-0.5 inline-block h-auto w-3.5"
    />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})

const isExternal = ref(false)

onMounted(() => {
  let href = props.href

  if (props.href.startsWith('/')) {
    href = window.location.origin + props.href
  } else if (props.href.startsWith('#')) {
    href = window.location.href + props.href
  }

  isExternal.value = new URL(href).hostname !== window.location.hostname
})
</script>
