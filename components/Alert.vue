<template>
  <div
    class="relative bg-white text-lg font-medium mb-4 p-4 pr-12 border-2 rounded-xl"
    :class="{
      'border-green-500 text-green-500': type == 'success',
      'border-red-500 text-red-500': type == 'error',
      'border-blue-500 text-blue-500': type == 'info',
    }">
    <span v-if="dismissible"
      class="absolute right-3 top-2 text-4xl cursor-pointer transition ease-cubic-bezier duration-500 hover:opacity-60 after:content-['×']"
      @click="$emit('close')" />

    <slot></slot>
  </div>
</template>

<script setup>
defineEmits(['close'])

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
