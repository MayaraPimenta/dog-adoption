<template>
  <button
    class="hover-scale border border-black-100 rounded-lg shadow-default px-6 py-2 text-sm"
    :class="[`bg-${backgroundColor}`, `text-${textColor}`, full ? 'w-full' : '']"
    @click="() => emit('btnClick')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const { backgroundColor = 'secondary-red', textColor = 'black-100', full } = defineProps<{
  backgroundColor?: string,
  textColor?: string,
  full?: boolean
}>();

const emit = defineEmits<{
  (e: 'btnClick'): void;
}>();
</script>

<style scoped>

</style>