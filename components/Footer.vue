<template>
  <footer id="footer" class="bg-secondary-500 text-neutral-50 font-medium text-xs">
    <div class="container mx-auto p-4">
      <div class="text-center">
        <a v-for="link in socialMedia" :key="link.name" :aria-label="link.name" :href="link.url" target="_blank"
          rel="noopener"
          class="inline-block transition duration-500 ease-cubic-bezier hover:cursor-pointer text-gray-50 hover:text-gray-100 mx-4 hover:opacity-60">
          <nuxt-img class="h-6 w-auto" :src="link.image" alt="" />
        </a>
      </div>
    </div>

    <div class="container mx-auto p-4 text-center text-lg">
      <a href="/cv_kai_mayer.pdf"
        class="inline-block my-1.5 transition duration-500 ease-cubic-bezier hover:cursor-pointer hover:opacity-60"
        target="_blank">
        Curriculum Vitae
      </a>
    </div>

    <div class="container mx-auto p-4">
      <span class="block text-center">
        &copy; 2015 — {{ new Date().getFullYear() }} <strong>Kazuto.de</strong>
      </span>
    </div>
  </footer>
</template>

<script setup>
const socialStore = useSocialStore()

const socialMedia = computed(() => socialStore.getAll)
</script>
