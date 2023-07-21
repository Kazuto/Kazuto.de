<template>
  <a
    :href="link.target"
    class="text-2xl text-neutral-50 transition duration-500 ease-cubic-bezier hover:text-neutral-400"
    @click="$emit('click')"
  >
    {{ link.name }}
  </a>
</template>

<script setup>
defineEmits(['click'])

defineProps({
  link: {
    type: Object,
    default: () => {},
  },
})
</script>
