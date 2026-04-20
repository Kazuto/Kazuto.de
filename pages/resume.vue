<template>
  <div class="bg-secondary-500 min-h-screen text-white print:bg-white print:text-black">
    <div class="grid grid-cols-1 lg:grid-cols-[350px_1fr] print:grid-cols-[300px_1fr]">
      <!-- Sidebar -->
      <ResumeSidebar :data="resumeData" />

      <!-- Main Content -->
      <main class="bg-secondary-500 p-8 lg:p-12 print:p-8">
        <div class="mx-auto max-w-4xl">
        <!-- Download Button -->
        <div class="mb-8 flex justify-end gap-4 print:hidden">
          <Button
            tag="a"
            href="/cv_kai_mayer.pdf"
            download
            color="primary"
          >
            Download PDF
          </Button>
          <Button
            tag="button"
            @click="printResume"
          >
            Print
          </Button>
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
import resumeData from '@/data/resume.json'

definePageMeta({
  layout: 'resume',
})

useHead({
  title: `${resumeData.personal.name} - Resume`,
  meta: [
    {
      name: 'description',
      content: `Professional resume of ${resumeData.personal.name}, ${resumeData.personal.title}`,
    },
    {
      property: 'og:title',
      content: `${resumeData.personal.name} - Resume`,
    },
    {
      property: 'og:description',
      content: `Professional resume of ${resumeData.personal.name}, ${resumeData.personal.title}`,
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

  body {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  * {
    box-shadow: none !important;
  }
}
</style>
