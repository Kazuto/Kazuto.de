<template>
  <header
    id="header"
    class="fixed top-0 right-0 left-0 z-50 h-fit transition-all delay-150"
    :class="{
      hide,
    }"
  >
    <slot></slot>
  </header>
</template>

<script setup>
const { y, directions } = useScroll(document, {
  throttle: 500,
})

const down = ref(false)

const hide = computed(() => {
  if (down.value && y.value > 200) return true

  return false
})

watchEffect(() => {
  if (directions.bottom) down.value = true

  if (directions.top) down.value = false
})
</script>

<style>
body:not(.overflow-hidden) #header.hide {
  top: -150px;
}
</style>
