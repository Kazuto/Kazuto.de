<template>
  <transition name="fade">
    <div
      v-show="visible"
      :style="{
        bottom: isBackTopFooter ? `${visibleFooterPixel + 16}px` : 16 + 'px',
      }"
      @click="backToTop"
    >
      <img src="~/assets/images/icons/chevron-up.svg" alt="" />
      <!-- <fa :icon="['fas', 'chevron-up']" /> -->
    </div>
  </transition>
</template>

<style lang="scss" scoped>
div {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparentize($secondary, 0.2);
  color: $white;

  border-radius: $border-radius;
  width: 3rem;
  height: 3rem;

  font-size: $font-size-base;

  transition: $transition-ease;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 24px;
    height: auto;
  }
}
</style>

<script>
export default {
  name: 'BackTopTop',
  props: {
    visibleoffset: {
      type: [String, Number],
      default: 600,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      visible: false,
      isBackTopFooter: false,
      scrollIndentBackTop: 0,
      scrollHeight: 0,
      visibleFooterPixel: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollHeight =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ) - window.innerHeight
    }, 1000)
    this.scrollIndentBackTop = document.getElementById('footer').clientHeight
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible =
        parseInt(this.visibleoffsetbottom) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset
      this.scrollFn()
    },
    backToTop() {
      window.scrollTo(0, 0)
    },
    scrollFn() {
      const diff = this.scrollHeight - window.pageYOffset
      this.isBackTopFooter = diff < this.scrollIndentBackTop

      if (this.isBackTopFooter) {
        this.visibleFooterPixel = this.scrollIndentBackTop - diff
      }
    },
  },
}
</script>
