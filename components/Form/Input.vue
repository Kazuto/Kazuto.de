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
      class="text-secondary-500 absolute left-5 block font-medium tracking-wide"
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

input:focus {
  outline: 0;
}

label {
  top: 1rem;
  pointer-events: none;
  transform-origin: left top;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  top: -0.75rem;
  transform: scale(0.75);
  background-color: rgb(245 245 245);
  padding: 0 0.25rem;
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
