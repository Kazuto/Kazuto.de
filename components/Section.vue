<template>
  <section
    class="section"
    :class="{ 'section--flex': flex, 'section--align-center': alignCenter }"
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

<script>
export default {
  name: 'Section',
  props: {
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
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;
  width: 100%;

  overflow-x: hidden;

  @include bp(sm) {
    overflow: visible;
  }

  &--flex {
    display: flex;
  }

  &--align-center {
    align-items: center;
  }
}
</style>
