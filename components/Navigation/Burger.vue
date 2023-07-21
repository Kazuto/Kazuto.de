<template>
  <a
    href="#"
    class="z-20 flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent transition duration-500 ease-cubic-bezier sm:hidden"
    type="button"
    aria-label="show navigation"
    @click.prevent="toggleMenu()"
  >
    <span
      class="h-0.5 w-10 bg-white transition duration-500 ease-cubic-bezier will-change-transform before:absolute before:-top-[10px] before:left-0 before:h-0.5 before:w-full before:bg-white before:transition before:duration-500 before:ease-cubic-bezier before:will-change-transform before:content-[''] after:absolute after:left-0 after:top-[10px] after:h-0.5 after:w-full after:bg-white after:transition after:duration-500 after:ease-cubic-bezier after:will-change-transform after:content-['']"
      :class="{
        'rotate-45 bg-neutral-50 before:translate-y-[10px] before:-rotate-90 before:bg-neutral-50 after:opacity-0':
          isMenuOpen,
      }"
    />
  </a>
</template>

<script setup>
const headerStore = useHeaderStore()

const isMenuOpen = computed(() => headerStore.getMenuState)

const toggleMenu = () => {
  headerStore.toggleMenu()
}
</script>
