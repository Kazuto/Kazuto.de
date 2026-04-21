import resumeDe from '@/data/resume.json'
import resumeEn from '@/data/resume-en.json'

export const useResumeData = () => {
  const { locale } = useI18n()

  const resumeData = computed(() => {
    return locale.value === 'en' ? resumeEn : resumeDe
  })

  return {
    resumeData
  }
}
