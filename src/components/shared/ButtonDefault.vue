<template>
  <button
    class="hover-scale border border-black-100 rounded-lg shadow-default px-4 py-2 text-sm"
    :class="[`bg-${backgroundColor}`, `text-${textColor}`]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const { backgroundColor = 'secondary-red', textColor = 'black-100' } = defineProps<{
  backgroundColor?: string,
  textColor?: string
}>();
</script>

<style scoped>

</style>