<template>
  <div ref="card" class="bg-neutral-50 shadow rounded-xl p-10 overflow-hidden">
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
