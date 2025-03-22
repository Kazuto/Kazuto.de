<template>
  <footer
    id="footer"
    class="bg-secondary-500 text-xs font-medium text-neutral-50"
  >
    <div class="container mx-auto p-4">
      <div class="text-center">
        <a
          v-for="link in links"
          :key="link.name"
          :aria-label="link.name"
          :href="link.target"
          target="_blank"
          rel="noopener"
          class="ease-cubic-bezier mx-4 inline-block text-gray-50 transition duration-500 hover:cursor-pointer hover:text-gray-100 hover:opacity-60"
        >
          <nuxt-img
            class="h-6 w-auto"
            :src="link.image"
            alt=""
          />
        </a>
      </div>
    </div>

    <div class="container mx-auto p-4 text-center text-lg">
      <a
        href="/cv_kai_mayer.pdf"
        class="ease-cubic-bezier my-1.5 inline-block transition duration-500 hover:cursor-pointer hover:opacity-60"
        target="_blank"
      >
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
const { links } = useSocial()
</script>
