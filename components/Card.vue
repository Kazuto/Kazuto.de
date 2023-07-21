<template>
  <div
    ref="card"
    class="overflow-hidden rounded-xl bg-neutral-50 p-10 shadow"
  >
    <div v-if="hasHeaderSlot">
      <slot name="header" />
    </div>

    <div>
      <slot />
    </div>

    <div v-if="hasFooterSlot">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
const slots = useSlots()

const hasHeaderSlot = computed(() => !!slots.header)

const hasFooterSlot = computed(() => !!slots.footer)
</script>
