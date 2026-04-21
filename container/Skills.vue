<template>
  <Section
    id="skills"
    name="skills"
    class="bg-primary-500 overflow-hidden py-20 text-white md:py-40"
  >
    <Container
      class="relative flex w-full flex-col items-start justify-center lg:flex-row"
    >
      <div class="mb-8 lg:m-0 lg:mr-16 lg:w-1/2">
        <Animation
          :x="-500"
          :opacity="0"
          :duration="0.5"
          :delay="0.35"
        >
          <h2 class="text-h1 leading-tight font-bold">What I can do</h2>
        </Animation>

        <Animation
          :x="-500"
          :opacity="0"
          :duration="0.5"
          :delay="0.5"
        >
          <ContentRenderer
            class="leading-wide text-body1"
            :value="description"
          />
        </Animation>
      </div>

      <div
        class="-m-4 grid items-start justify-start gap-8 p-4 lg:m-0 lg:-mt-8 lg:w-1/2 lg:gap-16 lg:p-0 lg:pt-16"
      >
        <Animation
          v-for="(skill, index) in content"
          :key="index"
          :x="1000"
          :opacity="0"
          :duration="0.5"
          :delay="0.25"
        >
          <Card
            name="skill"
            class="text-secondary-500 px-6 py-8 text-center md:px-20 md:py-16"
          >
            <nuxt-img
              :alt="skill.title"
              class="mb-8 inline h-16 w-16 md:h-20 md:w-20"
              :src="`/icons/${skill.image}`"
            />

            <h3 class="text-h3 mb-8! leading-tight font-bold">
              {{ skill.title }}
            </h3>
            <ContentRenderer
              class="text-body2"
              :value="skill"
            />
          </Card>
        </Animation>
      </div>
    </Container>
  </Section>
</template>

<script setup>
const { locale } = useI18n()

const { data: description, refresh: refreshDescription } = await useAsyncData(
  'skills-description',
  () => queryContent(`/${locale.value}/skills`)
    .where({ description: true })
    .findOne()
)

const { data: content, refresh: refreshContent } = await useAsyncData(
  'skills-content',
  () => queryContent(`/${locale.value}/skills`)
    .where({ description: { $not: true } })
    .find()
)

watch(locale, () => {
  refreshDescription()
  refreshContent()
})
</script>
