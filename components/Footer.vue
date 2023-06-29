<template>
  <footer id="footer" class="footer">
    <div class="footer__bar">
      <div class="footer__social">
        <a
          v-for="link in socialMedia"
          :key="link.name"
          :aria-label="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="footer__link footer__link--light footer__link--social"
        >
          <nuxt-img
            :src="link.image"
            alt=""
          />
        </a>
      </div>
    </div>

    <div class="footer__bar footer__links">
      <a
        href="/cv_kai_mayer.pdf"
        class="footer__link footer__link--light"
        target="_blank"
      >
        Curriculum Vitae
      </a>
    </div>

    <div class="footer__bar">
      <span class="footer__copyright">
        &copy; 2015 — {{ new Date().getFullYear() }} <strong>Kazuto.de</strong>
      </span>
    </div>
  </footer>
</template>

<script setup>
const socialStore = useSocialStore()

const socialMedia = computed(() => socialStore.getAll)
</script>

<style lang="scss" scoped>
.footer {
  background: $secondary;
  color: $gray-100;
  font-weight: 500;
  font-size: $font-size-xs;

  &__copyright {
    display: block;
    text-align: center;
  }

  &__bar {
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding: 1.3rem;
  }

  &__social {
    text-align: center;
  }

  &__links {
    text-align: center;
    font-size: $font-size-sm;
  }

  &__nav {
    text-align: center;
    a {
      margin: 0 0.8rem;
    }
  }

  &__link {
    display: inline-block;
    transition: $transition-ease;

    &:hover {
      cursor: pointer;
    }

    &--light {
      color: $gray-100;
      &:hover {
        color: darken($gray-100, 10%);
      }
    }

    &--social {
      margin: 0 0.8rem;
      &:first-child {
        margin-left: 0;
      }

      &:hover {
        opacity: 0.6;
      }

      img {
        height: 1.5rem;
        width: auto;
      }
    }
  }
}
</style>
