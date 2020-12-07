<template>
  <Section id="skills" name="skills">
    <Container>
      <div class="skills__left">
        <Animation :x="-500" :opacity="0" :duration="0.5" :delay="0.35">
          <Typography variant="h1" tag="h3"> What I can do </Typography>
        </Animation>
        <Animation :x="-500" :opacity="0" :duration="0.5" :delay="0.5">
          <Typography variant="body1">
            I'm a trained and certified Graphic Designer and skilled in
            <b>Adobe Photoshop</b>, <b>Illustrator</b> and <b>Indesign</b>,
            though I'm also familiar with <b>Premiere Pro</b> and
            <b>After Effects</b>. I work professionally as a Full-Stack
            Developer and use <b>PHP (Laravel, Symfony)</b> and <b>Go</b> as
            well as <b>HTML</b>, <b>CSS (SCSS)</b> and
            <b>JavaScript (Vue.js, Nuxt.js)</b>.
          </Typography>
        </Animation>
      </div>
      <div class="skills__right">
        <Animation
          v-for="(stack, index) in stacks"
          :key="index"
          :x="1000"
          :opacity="0"
          :duration="0.5"
          :delay="0.25"
        >
          <Card name="skill">
            <img
              :alt="stack.title"
              class="card__icon"
              :src="stack.metadata.icon.imgix_url"
            />

            <Typography variant="h3" tag="h4" class="card__title">
              {{ stack.title }}
            </Typography>
            <Typography
              variant="body2"
              class="card__content"
              v-html="stack.content"
            />

            <!-- <div slot="footer">
            <Typography variant="h5" tag="p" class="card__subtitle">
              {{ stack.metadata.subtitle }}
            </Typography>
            <div class="card__tags">
              <Tag
                v-for="(skill, idx) in stack.metadata.skills"
                :key="idx"
                small
                class="card__tag"
              >
                {{ skill.title }}
              </Tag>
            </div>
          </div> -->
          </Card>
        </Animation>
      </div>
    </Container>
  </Section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {}
  },
  computed: {
    stacks() {
      return this.$store.getters['skills/getAll']
    },
  },
  methods: {},
}
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
