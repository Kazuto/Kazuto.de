<template>
  <component :is="tag" class="button" :class="{
    'button--primary': primary,
    'button--secondary': secondary,
    'button--outline': outline,
    'button--sm': sm,
    'button--md': md,
    'button--lg': lg,
    'button--block': block,
  }">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  sm: {
    type: Boolean,
    default: false,
  },
  md: {
    type: Boolean,
    default: false,
  },
  lg: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.button {
  border: 0;

  font-size: $btn-font-size;
  font-weight: $btn-font-weight;
  padding: $btn-padding;

  display: flex;
  justify-content: center;
  align-items: center;

  background: $btn-bg;
  color: $btn-color;
  border-radius: $btn-border-radius;

  transition: $transition-ease;

  &:hover {
    cursor: pointer;
    background: $btn-bg-hover;
  }

  &--primary {
    background: $primary;
    color: $secondary;

    &:hover {
      background: lighten($primary, 10%);
    }

    &.button--outline {
      color: $primary;
    }
  }

  &--secondary {
    background: $secondary;
    color: $white;

    &.button--outline {
      color: $secondary;
    }
  }

  &--outline {
    border: 2px solid currentColor;
    background: transparent;
  }

  &--block {
    width: 100%;
  }

  &--sm {
    font-size: $font-size-sm;
  }

  &--lg {
    font-size: $font-size-lg;
    padding: $spacer * 0.75 $spacer;
  }
}
</style>
