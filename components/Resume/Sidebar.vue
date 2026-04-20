<template>
  <aside
    class="bg-secondary-600 rounded-tr-3xl rounded-br-3xl p-8 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto print:static print:max-h-fit print:rounded-none print:bg-transparent print:px-6 print:pt-6 print:pb-4 print:mb-6 print:border-b-2 print:border-gray-300"
  >
    <div class="print:flex print:w-full print:items-center">
      <div class="mb-8 flex justify-center print:mr-8 print:justify-start">
        <div class="border-primary-500 overflow-hidden rounded-full border-4">
          <nuxt-img
            src="/images/avatar.jpg"
            :alt="data.personal.name"
            class="h-48 w-48 object-cover"
            width="192"
            height="192"
          />
        </div>
      </div>

      <div class="mb-8 text-center print:text-left">
        <h1 class="text-display6 text-primary-500 mb-2 font-bold uppercase">
          {{ data.personal.name }}
        </h1>
        <p class="text-body2 text-white">{{ data.personal.title }}</p>
        <p class="text-body3 mt-2 text-gray-400">
          {{ data.personal.location }}
        </p>
      </div>
    </div>

    <br class="hidden print:block" />

    <div
      class="print:grid print:w-full print:grid-cols-3 print:items-start print:gap-8"
    >
      <section class="mb-8">
        <h2 class="text-body1 mb-4 font-bold text-white">Stammdaten</h2>
        <div class="space-y-3 text-sm text-gray-300">
          <div>
            <span class="block text-gray-400">Geburtsdatum:</span>
            <span class="text-white">{{ data.personal.birthdate }}</span>
          </div>
          <div>
            <span class="block text-gray-400">Anschrift:</span>
            <span class="text-white">{{ data.personal.address.street }}</span>
            <br />
            <span class="text-white">{{ data.personal.address.city }}</span>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-body1 mb-4 font-bold text-white">Kontakt</h2>
        <div class="space-y-3 text-sm text-gray-300">
          <div>
            <span class="block text-gray-400">Mobile:</span>
            <a
              :href="`tel:${data.personal.contact.mobile}`"
              class="hover:text-primary-500 text-white"
            >
              {{ data.personal.contact.mobile }}
            </a>
          </div>
          <div>
            <span class="block text-gray-400">E-Mail:</span>
            <a
              :href="`mailto:${data.personal.contact.email}`"
              class="hover:text-primary-500 text-white"
            >
              {{ data.personal.contact.email }}
            </a>
          </div>
          <div>
            <span class="block text-gray-400">Web:</span>
            <a
              :href="`https://${data.personal.contact.web}`"
              target="_blank"
              class="hover:text-primary-500 text-white"
            >
              {{ data.personal.contact.web }}
            </a>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-body1 mb-4 font-bold text-white">Sprachen</h2>
        <div class="space-y-2 text-sm text-gray-300">
          <div
            v-for="lang in data.languages"
            :key="lang.name"
          >
            <span class="text-white">{{ lang.name }}</span>
            <span class="text-gray-400"> ({{ lang.level }})</span>
          </div>
        </div>
      </section>
    </div>

    <div class="print:hidden">
      <section class="print:hidden">
        <div class="flex flex-wrap gap-2 print:hidden">
          <ResumeBadge
            class="print:hidden"
            v-for="skill in data.skills"
            :key="skill"
            :skill="skill"
          />
        </div>
      </section>
    </div>

    <br class="hidden print:block" />

    <div class="print:w-full">
      <section class="hidden print:block">
        <h2 class="text-body1 mb-4 font-bold text-white">Skills</h2>
        <div class="flex flex-wrap gap-2 text-sm">
          <span
            v-for="skill in data.skills"
            :key="skill"
            class="text-gray-300"
          >
            {{ skill }}

            <span v-if="skill !== data.skills[data.skills.length - 1]">,</span>
          </span>
        </div>
      </section>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
