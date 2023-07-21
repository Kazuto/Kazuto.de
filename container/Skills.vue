<template>
  <Section
    id="skills"
    name="skills"
    class="overflow-hidden bg-primary-500 py-20 text-white md:py-40"
  >
    <Container
      class="relative flex w-full flex-col items-start justify-center md:flex-row"
    >
      <div class="mb-8 md:sticky md:top-32 md:m-0 md:mr-16 md:w-1/2">
        <Animation
          :x="-500"
          :opacity="0"
          :duration="0.5"
          :delay="0.35"
        >
          <h2 class="text-h1 font-bold leading-tight">What I can do</h2>
        </Animation>

        <Animation
          :x="-500"
          :opacity="0"
          :duration="0.5"
          :delay="0.5"
        >
          <ContentRenderer
            class="leading-wide text-body1"
            :value="content"
          />
        </Animation>
      </div>

      <div
        class="-m-4 grid items-start justify-start gap-8 p-4 md:m-0 md:-mt-8 md:w-1/2 md:gap-16 md:p-0 md:pt-16"
      >
        <Animation
          v-for="(skill, index) in skills"
          :key="index"
          :x="1000"
          :opacity="0"
          :duration="0.5"
          :delay="0.25"
        >
          <Card
            name="skill"
            class="px-6 py-8 text-center text-secondary-500 md:px-20 md:py-16"
          >
            <nuxt-img
              :alt="skill.title"
              class="mb-8 inline h-16 w-16 md:h-20 md:w-20"
              :src="skill.metadata.icon.imgix_url"
            />

            <h3 class="!mb-8 text-h3 font-bold leading-tight">
              {{ skill.title }}
            </h3>

            <p
              class="text-body2"
              v-html="skill.content"
            />
          </Card>
        </Animation>
      </div>
    </Container>
  </Section>
</template>

<script setup>
const content = await queryContent('/skills').findOne()

const skillsStore = useSkillsStore()

const skills = computed(() => skillsStore.getAll)
</script>
