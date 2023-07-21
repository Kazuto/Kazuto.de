<template>
  <Section
    id="skills"
    name="skills"
    class="overflow-hidden bg-primary-500 py-20 text-white md:py-40"
  >
    <Container
      class="w-full flex flex-col md:flex-row justify-center items-start relative"
    >
      <div class="mb-8 md:sticky md:top-32 md:w-1/2 md:m-0 md:mr-16">
        <Animation :x="-500" :opacity="0" :duration="0.5" :delay="0.35">
          <h2 class="text-h1 font-bold leading-tight">What I can do</h2>
        </Animation>

        <Animation :x="-500" :opacity="0" :duration="0.5" :delay="0.5">
          <ContentRenderer class="text-body1 leading-wide" :value="content" />
        </Animation>
      </div>

      <div
        class="grid gap-8 md:gap-16 md:w-1/2 justify-start items-start p-4 -m-4 md:p-0 md:pt-16 md:m-0 md:-mt-8"
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
            class="text-secondary-500 text-center py-8 px-6 md:py-16 md:px-20"
          >
            <nuxt-img
              :alt="skill.title"
              class="inline mb-8 w-16 h-16 md:w-20 md:h-20"
              :src="skill.metadata.icon.imgix_url"
            />

            <h3 class="!mb-8 text-h3 font-bold leading-tight">
              {{ skill.title }}
            </h3>

            <p class="text-body2" v-html="skill.content" />
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
