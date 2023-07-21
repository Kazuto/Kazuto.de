<template>
  <Section
    id="about"
    flex
    align-center
    class="min-h-screen overflow-x-hidden bg-secondary-500 py-20 text-white"
  >
    <Container>
      <div
        class="flex flex-col gap-8 md:items-center lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1.25fr] 2xl:grid-cols-[1fr_1.5fr]"
      >
        <Animation
          :x="-500"
          :opacity="0"
          :duration="0.7"
          :delay="0.5"
          class="w-full"
        >
          <div
            class="aspect-[4/3] overflow-hidden rounded-xl md:self-start lg:aspect-auto lg:-translate-x-[58%] lg:-translate-y-96 xl:-translate-x-[15vw] xl:-translate-y-[22svh] 2xl:-translate-x-[15vw] 2xl:-translate-y-28"
          >
            <nuxt-img
              class="object-cover object-top"
              src="images/avatar.jpg"
              alt="Kai Mayer"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
        </Animation>

        <div class="about__right">
          <Animation
            :x="200"
            :opacity="0"
            :duration="0.6"
            :delay="0.35"
          >
            <h2 class="text-h2 leading-tight">Hi there, I'm Kai 👋</h2>

            <span class="flex items-center text-caption">
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
              class="mt-12 text-body2"
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
                class="transition duration-500 ease-cubic-bezier hover:opacity-60"
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
