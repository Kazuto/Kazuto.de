<template>
  <nav
    id="navigation"
    class="nav__bar"
    :class="{ fixed: fixed }"
    role="navigation"
    aria-label="Navigation"
  >
    <Container>
      <NavBrand />
      <div class="spacer" />
      <ul class="nav__menu">
        <li v-for="(link, idx) in items" :key="idx">
          <NavLink :link="link"></NavLink>
        </li>
      </ul>
      <NavBurger />
    </Container>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    items: {
      type: Array,
      default: () => {},
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.nav__bar {
  background: $nav-bg;
  transition: $transition-ease;
  backface-visibility: hidden;

  .container {
    padding-top: $navbar-padding;
    padding-bottom: $navbar-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.fixed {
    pointer-events: none;
    .nav__brand {
      display: none;
      img {
        opacity: 0;
        width: 40px;
      }
    }
    .nav__burger {
      pointer-events: auto;
    }
  }
}

.nav__menu {
  display: none;
  gap: $nav-items-gap;

  @include bp(sm) {
    display: flex;
  }
}
</style>
