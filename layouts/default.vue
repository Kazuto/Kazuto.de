<template>
  <div>
    <Header>
      <NavigationNavBar :items="navItems" />
      <NavigationNavMenuMobile :items="navItems" :header-height="state.headerHeight" />
    </Header>

    <NuxtPage />

    <Footer />

    <BackToTop />
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerStore = useHeaderStore()

const state = reactive({
  headerHeight: 0,
})

const navItems = computed(() => headerStore.getAllItems)

const overflow = computed(() => headerStore.getMenuState)

watch(overflow, (newValue) => {
  toggleBodyOverflow(newValue)
})

onMounted(async () => {
  state.headerHeight = document.querySelector('#header').clientHeight
})

const toggleBodyOverflow = (state) => {
  if (state) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/reset';

@font-face {
  font-family: 'Quicksand';
  src: local('Quicksand'), local('Quicksand'),
    url('~/assets/fonts/QuicksandVariable.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: 'Quicksand', Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 100%;
  position: relative;
}

body,
html {
  scroll-behavior: smooth;
}

body {
  background-color: $body-bg;
  color: $body-text;
  font-size: $font-size-base;

  overflow-x: hidden;

  &.overflow-hidden {
    overflow: hidden;
  }
}

b,
strong {
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
