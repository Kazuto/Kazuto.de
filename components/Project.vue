<template>
  <div
    v-if="item"
    ref="project"
    class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_1.5fr] md:items-center lg:grid-cols-[1fr_1.3fr] xl:grid-cols-[1fr_1.5fr] 2xl:grid-cols-[1fr_2.0fr]"
  >
    <div class="order-2 md:order-1">
      <Animation
        :y="-30"
        :opacity="0"
        :duration="0.6"
        :delay="0.3"
      >
        <p
          class="animate mb-4 text-subtitle font-bold uppercase tracking-wide text-primary-500"
        >
          <span v-if="item.metadata.featured">Featured Project</span>
          <span v-else>{{ item.metadata.caption }}</span>
        </p>
      </Animation>

      <Animation
        :y="-30"
        :opacity="0"
        :duration="0.6"
        :delay="0.4"
      >
        <h2 class="animate text-h2 font-bold text-secondary-500">
          {{ item.title }}
        </h2>
      </Animation>

      <Animation
        :y="-30"
        :opacity="0"
        :duration="0.6"
        :delay="0.5"
      >
        <p
          class="animate mb-0 text-body1 text-secondary-500"
          v-html="item.content"
        ></p>

        <a
          v-if="item.metadata.url"
          tag="a"
          :href="item.metadata.url"
          target="_blank"
          :aria-label="item.title"
          rel="noreferrer"
          class="mt-6 inline-block text-body2 font-medium text-primary-500 transition duration-500 ease-cubic-bezier hover:text-primary-700"
        >
          Visit now →
        </a>
      </Animation>
    </div>

    <div
      class="relative order-1 translate-x-0 md:order-2 md:translate-x-[15vw]"
    >
      <Animation
        :x="1000"
        :opacity="0"
        :duration="0.5"
        :delay="0.3"
      >
        <div class="overflow-hidden rounded-xl shadow">
          <nuxt-img
            class="aspect-[16/10] max-h-[600px] object-cover object-left"
            :src="item.metadata.image.url"
            :alt="item.title"
            sizes="md:40vw"
          />
        </div>
      </Animation>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>
