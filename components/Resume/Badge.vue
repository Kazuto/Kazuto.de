<template>
  <span
    class="inline-block rounded-full border-2 border-primary-500 px-4 py-1.5 text-sm font-medium text-primary-500 transition-all duration-300 hover:bg-primary-500 hover:text-white"
  >
    {{ skill }}
  </span>
</template>

<script setup>
defineProps({
  skill: {
    type: String,
    required: true,
  },
})
</script>
