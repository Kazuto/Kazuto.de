<template>
  <component :is="tag"
    class="text-center font-medium text-2xl rounded-xl px-6 py-2 border-0 transition duration-300 ease-cubic-bezier hover:cursor-pointer"
    :class="{
      'bg-primary-500 text-secondary-500 hover:bg-primary-200':
        color === 'primary',
      'bg-secondary-500 text-white hover:bg-secondary-300':
        color === 'secondary',
      'w-full': block,
    }">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
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
