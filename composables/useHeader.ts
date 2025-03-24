import { ref } from 'vue'

const open = ref(false)

const { width } = useWindowSize()

export function useHeader() {
  function toggle() {
    open.value = !open.value
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
      open.value = false
    }
  })

  return { open, toggle, links }
}
