<template>
  <transition name="overlay">
    <nav
      v-if="isMenuOpen"
      class="nav__overlay"
      :class="{ 'nav__container--active': isMenuOpen }"
      role="navigation"
      aria-label="Navigation"
    >
      <Container>
        <ul class="nav__list">
          <li v-for="(link, index) in items" :key="index" class="nav__item">
            <NavigationNavLink
              :link="link"
              @click="toggleMenu()"
            ></NavigationNavLink>
          </li>
        </ul>
        <ul class="social__list" />
      </Container>
    </nav>
  </transition>
</template>

<script setup>
const headerStore = useHeaderStore()

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  headerHeight: {
    type: Number,
    default: 0,
  },
})

const isMenuOpen = computed(() => headerStore.getMenuState)

const toggleMenu = () => {
  headerStore.toggleMenu()
}
</script>

<style lang="scss" scoped>
.nav__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  background: $nav-bg;
  overflow-x: hidden;
  padding: 0 40px;

  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &--active {
    opacity: 1;
  }
}

.nav__list {
  display: flex;
  flex-direction: column;
  gap: $nav-items-gap;
  list-style-type: none;
  // padding: 0;
  // margin: 0;
  text-align: right;
}

.nav__link {
  font-size: 1.8rem;
}

.overlay-enter-active {
  animation: fade-from-top 300ms ease-in-out;
}

.overlay-leave-active {
  animation: fade-from-top 300ms ease-in-out reverse;
}

@keyframes fade-from-top {
  0% {
    opacity: 0;
    transform: translate(0, -20%);
  }
  40% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
