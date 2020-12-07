<template>
  <a :href="link.target" class="nav__link" @click="$emit('click')">{{
    link.name
  }}</a>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    link: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.nav__link {
  font-size: 1.3rem;
  color: $nav-color;

  transition: $transition-ease;

  &:hover {
    color: $nav-color-hover;
  }
}
</style>
