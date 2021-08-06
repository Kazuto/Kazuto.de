<template>
  <Section id="landing" name="landing" fluid>
    <span class="bg">
      <img src="@/assets/images/undraw_coding.svg" alt="" />
    </span>
    <Container>
      <div class="hero">
        <div class="hero__body">
          <Typography variant="display4" tag="h1" class="hero__title">
            Uniquely crafted web experiences
          </Typography>
          <div class="button--group">
            <Button tag="a" href="#portfolio" primary>Check my work</Button>
            <Button tag="a" href="#about">More about me</Button>
          </div>
        </div>
        <div class="hero__footer">
          <a
            class="footer__link"
            href="#portfolio"
            name="portfolio"
            aria-label="portfolio"
          >
            <ScrollIndicator />
          </a>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
export default {
  name: 'Hero',
  mounted() {
    const tl = gsap.timeline({
      defaults: { duration: 0.75, delay: 0.5 },
    })

    tl.from('.hero__title', { y: -100, opacity: 0 }).to('.hero__title', {
      y: 0,
      opacity: 1,
    })
  },
  methods: {},
}
</script>

<style lang="scss">
#landing {
  background: $secondary;
  box-shadow: $box-shadow;
  color: $white;

  position: relative;
  overflow: hidden;

  .bg {
    position: absolute;
    right: 0;
    bottom: -1rem;
    z-index: 0;
    user-select: none; /* Standard */

    filter: saturate(0.2) opacity(0.2);
    transform: translateX(40%);

    img {
      height: 400px;
      @include bp(sm) {
        height: 500px;
      }
      @include bp(md) {
        height: 600px;
      }
      @include bp(lg) {
        height: 700px;
      }
    }
  }

  .hero {
    z-index: 1;

    width: 100%;
    height: 100vh;

    display: flex;
    place-items: center;

    &__body {
      width: 100%;

      @include bp(sm) {
        width: 75%;
      }
      @include bp(xl) {
        width: 60%;
      }
      @include bp(hd) {
        width: 50%;
      }
    }

    &__footer {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      transform: translateX(-50%);

      a {
        transition: $transition-ease;

        &:hover {
          opacity: 0.6;
        }
      }
    }

    &__title {
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: $spacer * 2;
    }
  }
}

.button--group {
  display: flex;
  flex-wrap: wrap;
  gap: $spacer;
}
</style>
