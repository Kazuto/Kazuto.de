import { ref } from 'vue'

const isMenuOpen = ref(false)

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

  return { open: isMenuOpen, toggle, links }
}
