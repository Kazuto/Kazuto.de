<template>
  <header
    id="header"
    class="fixed left-0 right-0 top-0 z-50 h-fit transition-all delay-150"
    :class="{
      hide: state.curDirection === 2 && state.curScroll > state.scrollTreshold,
    }"
  >
    <slot></slot>
  </header>
</template>

<script setup>
const headerStore = useHeaderStore()

const state = reactive({
  breakpoint: 576,
  curScroll: 0,
  prevScroll: 0,
  scrollTreshold: 200,
  curDirection: 0,
  prevDirection: 0,
})

const isMenuOpen = computed(() => headerStore.getMenuState)

onMounted(() => {
  state.curScroll = window.scrollY || document.documentElement.scrollTop
  state.prevScroll = window.scrollY || document.documentElement.scrollTop

  window.addEventListener('resize', catchResize)
  window.addEventListener('scroll', catchScroll)
})

const catchResize = () => {
  if (!isMenuOpen) {
    return
  }

  if (window.innerWidth >= state.breakpoint) {
    headerStore.toggleMenu()
  }
}

const catchScroll = () => {
  state.curScroll = window.scrollY || document.documentElement.scrollTop

  state.curDirection = state.curScroll > state.prevScroll ? 2 : 1

  state.prevDirection = state.curDirection
  state.prevScroll = state.curScroll
}
</script>

<style>
body:not(.overflow-hidden) #header.hide {
  top: -150px;
}
</style>
