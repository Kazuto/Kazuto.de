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
          class="animate text-subtitle text-primary-500 mb-4 font-bold tracking-wide uppercase"
        >
          <span v-if="item.featured">Featured Project</span>
          <span v-else>{{ item.caption }}</span>
        </p>
      </Animation>

      <Animation
        :y="-30"
        :opacity="0"
        :duration="0.6"
        :delay="0.4"
      >
        <h2 class="animate text-h2 text-secondary-500 font-bold">
          {{ item.title }}
        </h2>
      </Animation>

      <Animation
        :y="-30"
        :opacity="0"
        :duration="0.6"
        :delay="0.5"
      >
        <ContentRenderer
          class="animate text-body1 text-secondary-500 mb-0"
          :value="item"
        />

        <a
          v-if="item.url"
          tag="a"
          :href="item.url"
          target="_blank"
          :aria-label="item.title"
          rel="noreferrer"
          class="text-body2 text-primary-500 ease-cubic-bezier hover:text-primary-700 mt-6 inline-block font-medium transition duration-500"
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
            class="aspect-16/10 max-h-[600px] object-cover object-left"
            :src="`/images/projects/${item.image}`"
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
