import { ref, computed } from 'vue'

const isMenuOpen = ref(false)

export function useHeader() {
  const { t } = useI18n()

  function toggle() {
    isMenuOpen.value = !isMenuOpen.value
  }

  const links = computed(() => [
    {
      name: t('nav.myWork'),
      target: '#portfolio',
    },
    {
      name: t('nav.mySkills'),
      target: '#skills',
    },
    {
      name: t('nav.resume'),
      target: '/resume',
    },
    {
      name: t('nav.contact'),
      target: '#contact',
    },
  ])

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
  ]

  // expose managed state as return value
  return { links }
}
