<template>
  <a
    href="#"
    class="nav__burger"
    type="button"
    aria-label="show navigation"
    :class="{ 'nav__burger--active': isMenuOpen }"
    @click.prevent="toggleMenu()"
  >
    <span class="nav__patty" />
  </a>
</template>

<script setup>
const headerStore = useHeaderStore()

const isMenuOpen = computed(() => headerStore.getMenuState)

const toggleMenu = () => {
  headerStore.toggleMenu()
}
</script>

<style lang="scss" scoped>
.nav__burger {
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border: 0;
  /*background: #2b3033;*/
  background: transparent;
  cursor: pointer;
  transition: $transition-ease;

  &--active {
    .nav__patty {
      transform: rotate(45deg);
      background: $nav-color;

      &:before {
        transform: rotate(-90deg) translate(-10px, 0px);
        background: $nav-color;
      }

      &:after {
        opacity: 0;
      }
    }
  }

  @include bp(sm) {
    display: none;
  }
}

.nav__patty {
  height: 2px;
  width: 40px;
  background: white;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    height: 2px;
    width: 100%;
    background: white;
  }

  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    height: 2px;
    width: 100%;
    background: white;
  }
}

.nav__patty,
.nav__patty:before,
.nav__patty:after {
  will-change: transform;
  transition: $transition-ease;
}
</style>
