<template>
  <svg
    id="indicator"
    viewBox="0 0 35 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.5"
      y="2.5"
      width="30"
      height="69"
      rx="15"
      stroke="white"
      stroke-width="5"
    />
    <circle id="indicator__dot" cx="17.5" cy="18.5" r="8.5" fill="white" />
  </svg>
</template>

<script setup>
import gsap from 'gsap'
import { Back } from 'gsap';

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 2.5, delay: 1.5, opacity: 1 },
  })

  tl.from('#indicator', { opacity: 0 }).to(
    '#indicator__dot',
    {
      y: 36,
      repeat: -1,
      yoyo: true,
      ease: Back.easeInOut.config(1.2),
      duration: 1.65,
    },
    '-=3'
  )
})
</script>

<style lang="scss" scoped>
svg {
  width: 24px;
  height: auto;
}
</style>
