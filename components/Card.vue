<template>
  <div ref="card" class="card">
    <div v-if="hasHeaderSlot" class="card__header">
      <slot name="header" />
    </div>

    <div class="card__body">
      <slot />
    </div>

    <div v-if="hasFooterSlot" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {}
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.card {
  background: $card-bg;
  box-shadow: $card-box-shadow;
  border-radius: $card-border-radius;
  padding: $card-padding;
  overflow: hidden;
}
</style>
