<template>
  <div class="alert" :class="`alert--state-${type}`">
    <span v-if="dismissible" class="alert__close" @click="$emit('close')" />
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  dismissible: {
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss" scoped>
.alert {
  position: relative;
  padding: $alert-padding;
  margin: $alert-margin;

  border-width: $alert-border-width;
  border-style: $alert-border-style;
  border-color: $alert-border-color;
  border-radius: $alert-border-radius;

  font-size: $alert-font-size;
  font-weight: $alert-font-weight;
  color: $alert-color;

  &--state {
    &-success {
      border-color: $success;
      color: $success;
    }
    &-error {
      border-color: $danger;
      color: $danger;
    }
  }

  &__close {
    position: absolute;
    right: 0;
    top: 0.5rem;
    width: $alert-close-width;
    height: $alert-close-height;
    font-size: $alert-close-font-size;
    transition: $transition-ease;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
    &:after {
      content: '\00d7';
    }
  }
}
</style>
