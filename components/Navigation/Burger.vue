<template>
  <a
    href="#"
    class="w-16 h-16 flex justify-center items-center z-20 border-0 bg-transparent cursor-pointer transition ease-cubic-bezier duration-500 sm:hidden"
    type="button"
    aria-label="show navigation"
    @click.prevent="toggleMenu()"
  >
    <span
      class="h-0.5 w-10 bg-white will-change-transform transition ease-cubic-bezier duration-500 before:content-[''] before:absolute before:-top-[10px] before:left-0 before:h-0.5 before:w-full before:bg-white before:will-change-transform before:transition before:ease-cubic-bezier before:duration-500 after:content-[''] after:absolute after:top-[10px] after:left-0 after:h-0.5 after:w-full after:bg-white after:will-change-transform after:transition after:ease-cubic-bezier after:duration-500"
      :class="{
        'rotate-45 bg-neutral-50 before:-rotate-90 before:translate-y-[10px] before:bg-neutral-50 after:opacity-0':
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
