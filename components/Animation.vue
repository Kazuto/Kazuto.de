<template>
  <div
    ref="animation"
    class="animation"
  >
    <slot />
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animation = ref(null)

const props = defineProps({
  y: {
    type: Number,
    default: 0,
  },
  x: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 1,
  },
  delay: {
    type: Number,
    default: 0,
  },
  opacity: {
    type: Number,
    default: 1,
  },
})

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from(animation.value, {
      y: props.y,
      x: props.x,
      duration: props.duration,
      delay: props.delay,
      opacity: props.opacity,
      scrollTrigger: {
        trigger: animation.value,
      },
    })
  })
})

onUnmounted(() => {
  ctx.revert()
})
</script>
