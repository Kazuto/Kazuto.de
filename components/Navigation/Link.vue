<template>
  <a
    :href="link.target"
    class="text-2xl transition ease-cubic-bezier duration-500 text-neutral-50 hover:text-neutral-400"
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
