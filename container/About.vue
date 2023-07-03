<template>
  <Section id="about" flex align-center>
    <Container>
      <div class="about">
        <Animation :x="-500" :opacity="0" :duration="0.7" :delay="0.5">
          <div class="about__left">
            <nuxt-img src="avatar.jpg" alt="Kai Mayer" sizes="md:50vw" />
          </div>
        </Animation>
        <div class="about__right">
          <Animation :x="200" :opacity="0" :duration="0.6" :delay="0.35">
            <Typography variant="h3" tag="p" class="about__name">
              Hi there, I'm Kai 👋
            </Typography>
            <Typography variant="caption" class="about__location">
              <nuxt-img src="icons/map-pin.svg" alt="Location Icon" />
              Moenchengladbach, Germany
            </Typography>
          </Animation>

          <Animation :x="200" :opacity="0" :duration="0.6" :delay="0.35">
            <Typography variant="body2" class="about__biography">
              <ContentRenderer :value="content"  />
            </Typography>
          </Animation>

          <Animation :y="-100" :opacity="0" :duration="1" :delay="0.35">
            <div class="about__social">
              <a v-for="link in socialMedia" :key="link.name" :aria-label="link.name" :href="link.url" target="_blank"
                rel="noopener" class="card--profile__social-item" :class="link.name">
                <nuxt-img :src="link.image" :alt="link.name" />
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

<style scoped lang="scss">
.section {
  background: $secondary;
  color: $white;

  height: auto;

  padding: 5rem 0;

  @include bp(md) {
    padding: 0rem 0;
  }

  .about {
    display: flex;
    flex-direction: column;
    gap: $spacer * 2;

    @include bp(md) {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      align-items: center;
    }

    @include bp(lg) {
      grid-template-columns: 450px 1fr;
    }

    @include bp(xl) {
      grid-template-columns: 550px 1fr;
    }

    @include bp(hd) {
      grid-template-columns: 600px 1fr;
    }

    @include bp(fhd) {
      grid-template-columns: 650px 1fr;
    }
  }

  .about__left {
    height: 0;
    padding-top: 100%;
    border-radius: $border-radius;
    overflow: hidden;

    @include bp(md) {
      align-self: flex-start;
    }

    @include bp(lg) {
      height: 100vh;
      transform: translateX(-20%) translateY(-2rem);
    }

    @include bp(xl) {
      transform: translateX(-30%) translateY(-2rem);
    }

    @include bp(hd) {
      transform: translateX(-30%) translateY(-2rem);
    }

    @include bp(fhd) {
      transform: translateX(-50%) translateY(-2rem);
    }

    img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: auto;

      object-fit: cover;
      object-position: top;

      @include bp(lg) {
        max-height: 100vh;
      }

      // @include bp(hd) {
      //   width: 850px;
      // }

      // @include bp(fhd) {
      //   width: 980px;
      // }
    }
  }

  .about__name {
    font-weight: 700;
  }

  .about__location {
    margin-bottom: 3rem;

    display: flex;
    align-items: center;

    img {
      margin-right: 0.5rem;
    }
  }

  .about__social {
    margin-top: 5rem;

    display: flex;
    gap: 3rem;

    a {
      transition: $transition-ease;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
