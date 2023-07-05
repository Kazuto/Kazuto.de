<template>
  <div
    class="relative bg-white text-secondary-500 text-lg font-medium mb-4 p-4 pr-12 border-2 border-secondary-500 rounded-xl"
    :class="{
      'border-green-500 text-green-500': type === 'success',
      'border-red-500 text-red-500': type === 'error',
      'border-blue-500 text-blue-500': type === 'info',
    }">
    <span v-if="dismissible"
      class="absolute right-0 top-2 text-3xl cursor-pointer transition ease-cubic-bezier duration-500 hover:opacity-60 after:content-['×']"
      @click="$emit('close')" />

    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
})
</script>

<!-- <style lang="postcss" scoped> -->
<!-- span:after { -->
<!--   content: '\00d7'; -->
<!-- } -->
<!-- </style> -->
