<template>
  <div class="overflow-x-hidden">
    <Header>
      <NavigationBar :items="navItems" />
      <NavigationMenuMobile
        :items="navItems"
        :header-height="state.headerHeight"
      />
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

const {links: navItems, open} = useHeader()

const state = reactive({
  headerHeight: 0,
})

watch(open, (newValue) => {
  toggleBodyOverflow(newValue)
})

onMounted(() => {
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
