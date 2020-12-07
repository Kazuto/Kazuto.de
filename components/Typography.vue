<template>
  <component :is="isTag" :class="variant">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    variant: {
      type: String,
      default: 'p',
    },
    tag: {
      type: String,
      default: '',
    },
  },
  computed: {
    isTag() {
      let tag

      if (this.tag !== '') {
        return this.tag
      }

      switch (this.variant) {
        case 'body1':
        case 'body2':
        case 'lead':
        case 'caption':
        case 'overline':
        case 'small':
        case 'display1':
        case 'display2':
        case 'display3':
        case 'display4':
          tag = 'p'
          break
        default:
          tag = this.variant
      }

      return tag
    },
  },
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  color: $headings-color;
  font-family: $headings-font-family;
  font-weight: $headings-font-weight;
  letter-spacing: $headings-letter-spacing;
  line-height: $headings-line-height;
  margin-bottom: $headings-margin-bottom;
}

h1,
.h1 {
  font-size: clamp($h2-font-size, 5vw, $h1-font-size);
}

h2,
.h2 {
  font-size: clamp($h3-font-size, 4vw, $h2-font-size);
}

h3,
.h3 {
  font-size: clamp($h4-font-size, 3.5vw, $h3-font-size);
}

h4,
.h4 {
  font-size: clamp($h5-font-size, 3vw, $h4-font-size);
}

h5,
.h5 {
  font-size: clamp($h6-font-size, 2.5vw, $h5-font-size);
}

h6,
.h6 {
  font-size: $h6-font-size;
}

p {
  font-weight: 400;
  margin-bottom: 1rem;
}

.body1 {
  font-size: clamp($body2-font-size, 2vw, $body1-font-size);
  line-height: $body1-line-height;
}

.body2 {
  font-size: clamp($font-size-sm, 2vw, $body2-font-size);
  line-height: $body2-line-height;
}

.lead {
  font-size: clamp($font-size-base, 3vw, $lead-font-size);
}

.display1 {
  font-size: clamp($display2-size, 12vw, $display1-size);
  font-weight: $display1-weight;
  margin-bottom: 0.75rem;
}

.display2 {
  font-size: clamp($display3-size, 10.5vw, $display2-size);
  font-weight: $display2-weight;
  margin-bottom: 0.75rem;
}

.display3 {
  font-size: clamp($display4-size, 9vw, $display3-size);
  font-weight: $display3-weight;
  margin-bottom: 0.75rem;
}

.display4 {
  font-size: clamp($h2-font-size, 7vw, $display4-size);
  font-weight: $display4-weight;
  margin-bottom: 0.75rem;
}

.overline {
  display: block;
  text-transform: uppercase;
  font-weight: $overline-font-weight;
  font-size: clamp($font-size-xs, 1.3vw, $overline-font-size);
  letter-spacing: $overline-letter-spacing;
}

.caption {
  font-size: $caption-font-size;
}
</style>
