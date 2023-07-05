<template>
  <div v-if="item" ref="project"
    class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.3fr] xl:grid-cols-[1fr_1.5fr] 2xl:grid-cols-[1fr_2.0fr] md:items-center">
    <div class="order-2 md:order-1">
      <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.3">
        <p class="animate text-primary-500 mb-4 text-subtitle uppercase font-bold tracking-wide">
          <span v-if="item.metadata.featured">Featured Project</span>
          <span v-else>{{ item.metadata.caption }}</span>
        </p>
      </Animation>

      <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.4">
        <h2 class="animate font-bold text-secondary-500 text-h2">
          {{ item.title }}
        </h2>
      </Animation>

      <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.5">
        <p class="animate text-body1 mb-0 text-secondary-500" v-html="item.content"></p>

        <a v-if="item.metadata.url" tag="a" :href="item.metadata.url" target="_blank" :aria-label="item.title"
          rel="noreferrer"
          class="inline-block mt-6 text-body2 text-primary-500 hover:text-primary-700 font-medium transition ease-cubic-bezier duration-500">
          Visit now →
        </a>
      </Animation>
    </div>

    <div class="relative order-1 md:order-2 translate-x-0 md:translate-x-[15vw]">
      <Animation :x="1000" :opacity="0" :duration="0.5" :delay="0.3">
        <Card class="!p-0">
          <nuxt-img class="max-h-[600px] aspect-[16/10] object-cover object-left" :src="item.metadata.image.url"
            :alt="item.title" sizes="md:40vw" />
        </Card>
      </Animation>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => { },
  },
})
</script>
