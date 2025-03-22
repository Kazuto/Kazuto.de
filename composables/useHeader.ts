import { ref } from 'vue'

const isMenuOpen = ref(false)

const { width } = useWindowSize()

export function useHeader() {
  function toggle() {
    isMenuOpen.value = !isMenuOpen.value
  }

  const links = [
    {
      name: 'My work',
      target: '#portfolio',
    },
    {
      name: 'My skills',
      target: '#skills',
    },
    {
      name: 'Hire me',
      target: '#contact',
    },
  ]

  watchEffect(() => {
    if (width.value >= 576) {
      isMenuOpen.value = false
    }
  })

  return { open: isMenuOpen, toggle, links }
}
