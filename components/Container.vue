<template>
  <div
    class="container mx-auto px-8 md:px-16"
    :class="{ 'max-w-full': fluid }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  fluid: {
    type: Boolean,
    default: false,
  },
});
</script>
