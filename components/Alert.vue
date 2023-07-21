<template>
  <div
    class="relative mb-4 rounded-xl border-2 bg-white p-4 pr-12 text-lg font-medium"
    :class="{
      'border-green-500 text-green-500': type == 'success',
      'border-red-500 text-red-500': type == 'error',
      'border-blue-500 text-blue-500': type == 'info',
    }"
  >
    <span
      v-if="dismissible"
      class="absolute right-3 top-2 cursor-pointer text-4xl transition duration-500 ease-cubic-bezier after:content-['×'] hover:opacity-60"
      @click="$emit('close')"
    />

    <slot></slot>
  </div>
</template>

<script setup>
defineEmits(['close'])

defineProps({
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
