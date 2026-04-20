<template>
  <article class="relative mb-12 pl-8 last:pb-0 print:pl-0 print:break-inside-avoid">
    <div class="mb-8">
      <div class="flex w-full flex-wrap items-center justify-between gap-2">
        <h3 class="text-display6 mb-1 font-bold text-white">
          {{ experience.company }}
        </h3>
        <span class="text-body2 whitespace-nowrap text-gray-400">
          {{ experience.period }}
        </span>
      </div>

      <p
        v-if="experience.subtitle"
        class="text-body3 text-gray-400 uppercase print:text-xs"
      >
        {{ experience.subtitle }}
      </p>

      <p class="text-body1 text-primary-400 mt-1">
        {{ experience.role }}
      </p>
    </div>

    <div
      v-if="experience.responsibilities.length > 0"
      class="space-y-8"
    >
      <div
        v-for="(section, idx) in experience.responsibilities"
        :key="idx"
      >
        <h4
          v-if="section.category"
          class="text-body1 mb-3 font-semibold text-white"
        >
          {{ section.category }}
        </h4>
        <ul class="space-y-3">
          <li
            v-for="(task, taskIdx) in section.tasks"
            :key="taskIdx"
            class="text-body2 relative flex pl-8 text-gray-300"
          >
            <span
              class="resume-bullet border-primary-500 bg-secondary-500 absolute top-[6px] left-[-1px] h-4 w-4 flex-shrink-0 rounded-full border-4"
            ></span>
            <span>{{ task }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
})
</script>
