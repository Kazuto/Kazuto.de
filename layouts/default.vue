<template>
  <div>
    <Header>
      <NavigationNavBar :items="navItems" />
      <NavigationNavMenuMobile
        :items="navItems"
        :header-height="headerHeight"
      />
    </Header>
    <Nuxt />
    <Footer />

    <BackToTop />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: 0,
    }
  },
  computed: {
    navItems() {
      return this.$store.getters['header/getAllItems']
    },
    overflow() {
      return this.$store.getters['header/getMenuState']
    },
  },
  watch: {
    overflow(newVal) {
      this.toggleBodyOverflow(newVal)
    },
  },
  created() {
    this.$store.dispatch('projects/getProjects')
    this.$store.dispatch('skills/getStacks')
  },
  mounted() {
    this.headerHeight = document.querySelector('#header').clientHeight
  },
  methods: {
    toggleBodyOverflow(state) {
      if (state) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/reset';

@font-face {
  font-family: 'Quicksand';
  src: local('Quicksand'), local('Quicksand'),
    url('~@/assets/fonts/QuicksandVariable.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: 'Quicksand', Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 100%;
  position: relative;
}

body,
html {
  scroll-behavior: smooth;
}

body {
  background-color: $body-bg;
  color: $body-text;
  font-size: $font-size-base;

  overflow-x: hidden;
  &.overflow-hidden {
    overflow: hidden;
  }
}

b,
strong {
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
