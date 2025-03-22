<template>
  <component
    :is="tag"
    class="ease-cubic-bezier rounded-xl border-0 px-6 py-2 text-center text-2xl font-medium transition duration-300 hover:cursor-pointer"
    :class="{
      'bg-primary-500 text-secondary-500 hover:bg-primary-200':
        color === 'primary',
      'bg-secondary-500 hover:bg-secondary-300 text-white':
        color === 'secondary',
      'w-full': block,
    }"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'secondary',
  },
  block: {
    type: Boolean,
    default: false,
  },
})
</script>
