<template>
  <transition name="fade">
    <div v-show="state.visible"
      class="flex justify-center items-center w-12 h-12 fixed bottom-4 right-4 z-50 bg-secondary-500 bg-opacity-80 text-white rounded-xl transition ease-cubic-bezier duration-500 hover:cursor-pointer"
      :style="{
        bottom: state.isBackTopFooter
          ? `${state.visibleFooterPixel + 16}px`
          : 16 + 'px',
      }" @click="backToTop">
      <nuxt-img class="w-6 h-auto" src="icons/chevron-up.svg" alt="" />
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
  const pastTopOffset = window.pageYOffset > parseInt(props.visibleoffset)
  console.log(pastTopOffset)

  const pastBottomOffset =
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - parseInt(props.visibleoffsetbottom)

  state.visible =
    parseInt(props.visibleoffsetbottom) > 0
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
