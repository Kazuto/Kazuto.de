<template>
  <div class="relative">
    <input
      :id="id"
      :placeholder="label"
      type="text"
      :aria-labelledby="`label-${id}`"
      :name="id"
      :value="value"
      class="font-sm border-secondary-500 text-secondary-500 ring-secondary-900 ease-cubic-bezier mb-6 w-full resize-none rounded-xl border-2 bg-neutral-100 px-5 py-4 transition duration-500 hover:bg-neutral-50"
      @input="$emit('update:value', $event.target.value)"
    />

    <label
      :id="`label-${id}`"
      :for="id"
      class="text-secondary-500 ease-cubic-bezier absolute left-5 block origin-[0_0] font-medium tracking-wide transition duration-500"
      :aria-label="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
defineEmits(['update:value', 'close'])

defineProps({
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'name',
  },
  id: {
    type: String,
    default: 'input',
  },
  type: {
    type: String,
    default: 'text',
  },
})
</script>

<style lang="postcss">
input::placeholder {
  font-weight: 500;
  letter-spacing: 1px;
  color: transparent;
}

input::focus {
  outline: 0;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  @apply bg-neutral-100;
  padding: 0 4px;

  transform: translateY(-1.8rem) scale(0.7);
}

label {
  top: clamp(1rem, 2.6vw, 0.4rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
