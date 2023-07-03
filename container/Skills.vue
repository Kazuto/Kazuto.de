<template>
  <Section id="skills" name="skills">
    <Container>
      <div class="skills__left">
        <Animation :x="-500" :opacity="0" :duration="0.5" :delay="0.35">
          <Typography variant="h1" tag="h3"> What I can do </Typography>
        </Animation>
        <Animation :x="-500" :opacity="0" :duration="0.5" :delay="0.5">
            <ContentRenderer :value="content" />
        </Animation>
      </div>
      <div class="skills__right">
        <Animation v-for="(skill, index) in skills" :key="index" :x="1000" :opacity="0" :duration="0.5" :delay="0.25">
          <Card name="skill">
            <nuxt-img :alt="skill.title" class="card__icon" :src="skill.metadata.icon.imgix_url" />

            <Typography variant="h3" tag="h4" class="card__title">
              {{ skill.title }}
            </Typography>
            <Typography variant="body2" class="card__content" v-html="skill.content" />
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

<style lang="scss">
#skills {
  background: $primary;
  color: $white;

  padding: 5rem 0;

  @include bp(md) {
    padding: 10rem 0;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    @include bp(md) {
      flex-direction: row;
    }

    .h1 {
      font-weight: 700;
    }

    .skills__left {
      margin: 0 0 2rem;

      @include bp(md) {
        position: sticky;
        top: 8rem;
        width: 50%;
        margin: 0 4rem 0 0;
      }

      p {
        line-height: 1.25;
      }
    }

    .skills__right {
      display: grid;
      grid-gap: 2rem;
      justify-content: flex-start;
      align-items: flex-start;
      flex: 0 auto;
      // overflow-x: hidden;

      padding: 1rem;
      margin: -1rem;

      @include bp(md) {
        grid-gap: 4rem;
      }

      @include bp(md) {
        width: 50%;
        padding: 4rem 0 0;
        margin-top: -2rem;
      }
    }
  }

  .card {
    color: $gray-900;
    text-align: center;
    padding: 2rem 1.5rem;

    @include bp(lg) {
      padding: 4rem 5rem;
    }

    .card__icon {
      margin-bottom: 2rem;

      width: 4rem;
      height: 4rem;

      @include bp(sm) {
        width: 6rem;
        height: 6rem;
      }
    }

    .card__title {
      font-weight: 700;

      margin-bottom: 1.5rem;
    }

    .card__subtitle {
      font-weight: 600;
    }
  }
}
</style>
