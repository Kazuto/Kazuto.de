<template>
  <div v-if="item" ref="project" class="project">
    <div class="project__left">
      <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.3">
        <Typography variant="overline" class="animate">
          <span v-if="item.metadata.featured">Featured Project</span>
          <span v-else>{{ item.metadata.caption }}</span>
        </Typography>
      </Animation>
      <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.4">
        <Typography variant="h2" class="project__title animate">{{
          item.title
        }}</Typography>
      </Animation>

      <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.5">
        <Typography variant="body1" class="project__description animate" v-html="item.content"></Typography>

        <Typography v-if="item.metadata.url" variant="body1" tag="a" :href="item.metadata.url" target="_blank"
          :aria-label="item.title" rel="noreferrer" class="project__link">
          Visit now
        </Typography>
      </Animation>
    </div>
    <div class="project__right">
      <Animation :x="1000" :opacity="0" :duration="0.5" :delay="0.3">
        <Card class="card--project">
          <nuxt-img :src="item.metadata.image.url" :alt="item.title" sizes="md:40vw" />
        </Card>
      </Animation>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => { },
  },
})

const state = reactive({
  imageSizes: [320, 640, 768, 960, 1024, 1280, 1600, 1920, 2560, 3840],
})

const generateSrcSet = (url) => {
  let string = ''

  state.imageSizes.map((size, index) => {
    string += `${url}?w=${size} ${size}w`

    if (index < state.imageSizes.length - 1) {
      string += ','
    }
  })

  return string
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: $spacer * 2;

  @include bp(md) {
    display: grid;
    grid-template-columns: 400px 450px;
    align-items: center;
  }

  @include bp(lg) {
    grid-template-columns: 450px 600px;
  }

  @include bp(xl) {
    grid-template-columns: 500px 800px;
  }

  @include bp(hd) {
    grid-template-columns: 600px 1135px;
  }

  &__left {
    order: 1;

    @include bp(md) {
      order: 0;
    }
  }

  &__right {
    order: 0;

    @include bp(md) {
      order: 1;
      transform: translateX(10vw);
    }
  }

  .project__title {
    font-weight: 700;
  }

  .overline {
    color: $primary;
    margin-bottom: 0;
  }

  .project__description {
    margin-bottom: 0;
  }

  .project__link {
    display: inline-block;
    margin-top: $spacer * 1.5;

    font-size: $font-size-sm;
    color: $primary;
    font-weight: 500;

    transition: $transition-ease;

    &:hover {
      color: darken($primary, 10%);
    }
  }
}
</style>

<style lang="scss">
.project__right .card.card--project {
  padding: 0;

  .card__body {
    position: relative;

    height: 0;
    padding-top: 56.25%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}
</style>
