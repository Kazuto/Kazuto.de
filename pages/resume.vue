<template>
  <div
    class="bg-secondary-500 min-h-screen text-white print:bg-transparent print:text-black"
  >
    <div class="grid grid-cols-1 lg:grid-cols-[350px_1fr] print:block">
      <!-- Sidebar -->
      <ResumeSidebar :data="resumeData" />

      <!-- Main Content -->
      <main
        class="bg-secondary-500 p-8 lg:p-12 print:mt-0 print:bg-white print:px-6 print:pt-0 print:pb-8"
      >
        <div class="mx-auto max-w-4xl print:max-w-none">
          <!-- Language Switcher & Download Buttons -->
          <div class="mb-8 flex justify-between items-center gap-4 print:hidden">
            <LanguageSwitcher />
            <div class="flex gap-4">
            <Button
              tag="a"
              href="/cv_kai_mayer.pdf"
              download
              color="primary"
            >
              {{ $t('resume.downloadPdf') }}
            </Button>
            <Button
              tag="button"
              @click="printResume"
            >
              {{ $t('resume.print') }}
            </Button>
            </div>
          </div>

          <!-- Experience Timeline -->
          <section>
            <Animation
              v-for="(exp, index) in resumeData.experience"
              :key="index"
              :y="50"
              :opacity="0"
              :duration="0.8"
              :delay="index * 0.1"
            >
              <ResumeExperience
                :experience="exp"
                :is-last="index === resumeData.experience.length - 1"
              />
            </Animation>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import resumeDe from '@/data/resume.json'
import resumeEn from '@/data/resume-en.json'

const { locale, t } = useI18n()

definePageMeta({
  layout: 'resume',
})

// Load resume data based on current locale
const resumeData = computed(() => {
  return locale.value === 'en' ? resumeEn : resumeDe
})

useHead({
  title: computed(() => `${resumeData.value.personal.name} - ${t('resume.title')}`),
  meta: [
    {
      name: 'description',
      content: computed(() => `Professional resume of ${resumeData.value.personal.name}, ${resumeData.value.personal.title}`),
    },
    {
      property: 'og:title',
      content: computed(() => `${resumeData.value.personal.name} - ${t('resume.title')}`),
    },
    {
      property: 'og:description',
      content: computed(() => `Professional resume of ${resumeData.value.personal.name}, ${resumeData.value.personal.title}`),
    },
  ],
})

const printResume = () => {
  window.print()
}
</script>

<style>
@media print {
  @page {
    margin: 1cm;
    size: A4;
  }

  body,
  #__nuxt,
  #__nuxt > div {
    display: block !important;
  }

  * {
    box-shadow: none !important;
    background-color: white !important;
    color: black !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 0.85em !important;
    page-break-after: avoid !important;
    break-after: avoid !important;
  }

  p,
  li,
  span {
    font-size: 0.75em !important;
    line-height: 1.4 !important;
  }

  /* Force show all GSAP animated content */
  .animation,
  .animation > * {
    opacity: 1 !important;
    transform: none !important;
    visibility: visible !important;
  }

  /* Prevent breaks within task items and small sections */
  li {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  /* Try to keep headings with their content */
  h3,
  h4 {
    page-break-after: avoid !important;
    break-after: avoid !important;
  }

  /* Keep orange accent for bullets */
  .resume-bullet {
    border-color: #ff9900 !important;
    background-color: white !important;
  }

  /* Avatar smaller in print */
  aside img {
    width: 120px !important;
    height: 120px !important;
  }

  aside h1 {
    font-size: 1.3em !important;
    margin-bottom: 0.25rem !important;
  }

  aside section h2 {
    font-size: 0.85em !important;
    margin-bottom: 0.5rem !important;
    font-weight: bold !important;
  }

  aside p,
  aside span,
  aside a {
    font-size: 1em !important;
  }
}
</style>
