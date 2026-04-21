<template>
  <component
    :is="tag"
    class="ease-cubic-bezier rounded-xl border-0 text-center font-medium transition duration-300 hover:cursor-pointer"
    :class="[
      {
        'bg-primary-500 text-secondary-500 hover:bg-primary-200':
          color === 'primary',
        'bg-secondary-500 hover:bg-secondary-300 text-white':
          color === 'secondary',
        'w-full': block,
      },
      sizeClasses
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'secondary',
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  block: {
    type: Boolean,
    default: false,
  },
})

const sizeClasses = computed(() => {
  const sizes = {
    small: 'px-4 py-1.5 text-sm',
    medium: 'px-6 py-2 text-2xl',
    large: 'px-8 py-3 text-3xl'
  }
  return sizes[props.size]
})
</script>
