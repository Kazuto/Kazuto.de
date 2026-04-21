<template>
  <div class="flex gap-1">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      @click="switchLocale(locale.code)"
      :class="[
        'px-1 py-1 text-xl transition-all print:hidden',
        currentLocale === locale.code
          ? 'scale-100'
          : 'opacity-40 grayscale hover:opacity-70 hover:grayscale-0',
      ]"
      :title="locale.name"
    >
      {{ locale.flag }}
    </button>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const currentLocale = computed(() => locale.value)

const flagMap = {
  de: '🇩🇪',
  en: '🇺🇸',
}

const availableLocales = computed(() =>
  locales.value.map((loc) => ({
    ...loc,
    flag: flagMap[loc.code] || loc.code,
  }))
)

const switchLocale = (code) => {
  setLocale(code)
}
</script>
