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

export function useSocial() {
  const links = [
    {
      name: 'github',
      target: 'https://github.com/Kazuto',
      color: '#24292E',
      image: 'icons/github.svg',
    },
    {
      name: 'linkedin',
      target: 'https://www.linkedin.com/in/kai-mayer/',
      color: '#2867B2',
      image: 'icons/linkedin.svg',
    },
  ]

  // expose managed state as return value
  return { links }
}
