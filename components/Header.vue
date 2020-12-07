<template>
  <header
    id="header"
    :class="{ hide: curDirection === 2 && curScroll > scrollTreshold }"
  >
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      breakpoint: 576,
      curScroll: 0,
      prevScroll: 0,
      scrollTreshold: 200,
      curDirection: 0,
      prevDirection: 0,
    }
  },
  computed: {
    isMenuOpen() {
      return this.$store.getters['header/getMenuState']
    },
  },
  mounted() {
    this.curScroll = window.scrollY || document.documentElement.scrollTop
    this.prevScroll = window.scrollY || document.documentElement.scrollTop

    window.addEventListener('resize', this.catchResize)
    window.addEventListener('scroll', this.catchScroll)
  },
  methods: {
    catchResize() {
      if (!this.isMenuOpen) {
        return
      }

      if (window.innerWidth >= this.breakpoint) {
        this.$store.dispatch('header/toggleMenu')
      }
    },
    catchScroll() {
      this.curScroll = window.scrollY || document.documentElement.scrollTop

      this.curDirection = this.curScroll > this.prevScroll ? 2 : 1

      this.prevDirection = this.curDirection
      this.prevScroll = this.curScroll
    },
  },
}
</script>

<style scoped lang="scss">
header {
  height: fit-content;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;

  transition: top 500ms ease-in-out;
  transition-delay: 150ms;
}
</style>

<style lang="scss">
body:not(.overflow-hidden) {
  #header {
    &.hide {
      top: -150px;
    }
  }
}
</style>
