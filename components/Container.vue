<template>
  <div class="container" :class="{ 'container--fluid': fluid }">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  fluid: {
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  max-width: $container-max-width;

  margin: 0 auto;
  padding-left: $container-padding-sm;
  padding-right: $container-padding-sm;

  &--fluid {
    max-width: 100%;
  }

  @include bp(md) {
    padding-left: $container-padding;
    padding-right: $container-padding;
  }
}
</style>
