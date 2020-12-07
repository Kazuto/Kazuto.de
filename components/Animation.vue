<template>
  <div ref="animation">
    <slot />
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Animation',
  props: {
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
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      gsap.from(this.$refs.animation, {
        scrollTrigger: this.$refs.animation,
        y: this.y,
        x: this.x,
        duration: this.duration,
        delay: this.delay,
        opacity: this.opacity,
      })
    })
  },
}
</script>
