<template>
  <Section
    id="about"
    flex
    align-center
    class="bg-secondary-500 min-h-screen py-20 text-white"
  >
    <Container>
      <div
        class="flex flex-col gap-8 md:items-center lg:grid lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[1fr_1.25fr] 2xl:grid-cols-[1fr_1.5fr]"
      >
        <Animation
          :x="-500"
          :opacity="0"
          :duration="0.7"
          :delay="0.5"
          class="w-full"
        >
          <div
            class="aspect-4/3 overflow-hidden rounded-xl md:self-start lg:aspect-auto lg:-translate-x-[11rem] lg:-translate-y-[30rem] xl:-translate-x-[12rem] xl:-translate-y-[19rem] 2xl:-translate-x-[15.5rem] 2xl:-translate-y-44"
          >
            <nuxt-img
              class="object-cover object-top"
              src="images/avatar.jpg"
              alt="Kai Mayer"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
        </Animation>

        <div>
          <Animation
            :x="200"
            :opacity="0"
            :duration="0.6"
            :delay="0.35"
          >
            <h2 class="text-h2 leading-tight">Hi there, I'm Kai 👋</h2>

            <span class="text-caption flex items-center">
              <nuxt-img
                class="mr-2"
                src="icons/map-pin.svg"
                alt="Location Icon"
              />
              Moenchengladbach, Germany
            </span>
          </Animation>

          <Animation
            :x="200"
            :opacity="0"
            :duration="0.6"
            :delay="0.35"
          >
            <ContentRenderer
              class="text-body2 mt-12"
              :value="content"
            />
          </Animation>

          <Animation
            :y="-100"
            :opacity="0"
            :duration="1"
            :delay="0.35"
          >
            <div class="mt-20 flex gap-12">
              <a
                v-for="link in socialMedia"
                :key="link.name"
                :aria-label="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="ease-cubic-bezier transition duration-500 hover:opacity-60"
                :class="link.name"
              >
                <nuxt-img
                  :src="link.image"
                  :alt="link.name"
                />
              </a>
            </div>
          </Animation>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script setup>
const content = await queryContent('/about').findOne()
const socialStore = useSocialStore()

const socialMedia = computed(() => socialStore.getAll)
</script>
