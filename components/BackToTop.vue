<template>
  <transition name="fade">
    <div v-show="state.visible" :style="{
      bottom: state.isBackTopFooter ? `${state.visibleFooterPixel + 16}px` : 16 + 'px',
    }" @click="backToTop">
      <img src="~/assets/images/icons/chevron-up.svg" alt="" />
      <!-- <fa :icon="['fas', 'chevron-up']" /> -->
    </div>
  </transition>
</template>


<script setup>
const props = defineProps({
  visibleoffset: {
    type: [String, Number],
    default: 600,
  },
  visibleoffsetbottom: {
    type: [String, Number],
    default: 0,
  },
})

const state = reactive({
  visible: false,
  isBackTopFooter: false,
  scrollIndentBackTop: 0,
  scrollHeight: 0,
  visibleFooterPixel: 0,
})

onMounted(() => {
  setTimeout(() => {
    state.scrollHeight =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - window.innerHeight
  }, 1000)

  state.scrollIndentBackTop = document.getElementById('footer').clientHeight

  window.addEventListener('scroll', catchScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', catchScroll)
})

const catchScroll = () => {
  const pastTopOffset = window.pageYOffset > parseInt(state.visibleoffset)

  const pastBottomOffset =
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - parseInt(state.visibleoffsetbottom)

  state.visible =
    parseInt(state.visibleoffsetbottom) > 0
      ? pastTopOffset && !pastBottomOffset
      : pastTopOffset

  scrollFn()
}

const backToTop = () => {
  window.scrollTo(0, 0)
}

const scrollFn = () => {
  const diff = state.scrollHeight - window.pageYOffset

  state.isBackTopFooter = diff < state.scrollIndentBackTop

  if (state.isBackTopFooter) {
    state.visibleFooterPixel = state.scrollIndentBackTop - diff
  }
}
</script>

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
