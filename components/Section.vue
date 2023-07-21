<template>
  <section
    class="w-full"
    :class="{ flex: flex, 'items-center': alignCenter }"
  >
    <header v-if="hasHeaderSlot">
      <slot name="header" />
    </header>

    <slot />

    <footer v-if="hasFooterSlot">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script setup>
const slots = useSlots()

defineProps({
  name: {
    type: String,
    default: '',
  },
  flex: {
    type: Boolean,
    default: false,
  },
  alignCenter: {
    type: Boolean,
    default: false,
  },
})

const hasHeaderSlot = computed(() => !!slots.header)

const hasFooterSlot = computed(() => !!slots.footer)
</script>
