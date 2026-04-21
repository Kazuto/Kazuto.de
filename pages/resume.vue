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
              size="small"
            >
              {{ $t('resume.downloadPdf') }}
            </Button>
            <Button
              tag="button"
              @click="printResume"
              size="small"
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
const { locale, t } = useI18n()
const route = useRoute()
const { resumeData } = useResumeData()

definePageMeta({
  layout: 'resume',
})

const siteUrl = 'https://kazuto.de'
const ogImageUrl = `${siteUrl}/images/og-image.png`

useSeoMeta({
  title: computed(() => `${resumeData.value.personal.name} - ${t('resume.title')}`),
  description: computed(() => `Professional resume of ${resumeData.value.personal.name}, ${resumeData.value.personal.title}. Download PDF or view online.`),
  ogTitle: computed(() => `${resumeData.value.personal.name} - ${t('resume.title')}`),
  ogDescription: computed(() => `Professional resume of ${resumeData.value.personal.name}, ${resumeData.value.personal.title}`),
  ogImage: ogImageUrl,
  ogUrl: `${siteUrl}${route.path}`,
  ogType: 'profile',
  ogSiteName: 'Kazuto Portfolio',
  ogLocale: computed(() => locale.value === 'de' ? 'de_DE' : 'en_US'),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => `${resumeData.value.personal.name} - ${t('resume.title')}`),
  twitterDescription: computed(() => `Professional resume of ${resumeData.value.personal.name}, ${resumeData.value.personal.title}`),
  twitterImage: ogImageUrl,
  robots: 'index, follow',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}${route.path}`
    },
    {
      rel: 'alternate',
      hreflang: 'de',
      href: `${siteUrl}/resume`
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${siteUrl}/resume`
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${siteUrl}/resume`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: resumeData.value.personal.name,
        jobTitle: resumeData.value.personal.title,
        url: `${siteUrl}/resume`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mönchengladbach',
          addressCountry: 'DE'
        },
        knowsAbout: resumeData.value.skills || []
      }))
    }
  ]
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
