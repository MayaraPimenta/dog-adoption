<template>
  <button
    class="hover-scale border-2 border-black rounded-lg shadow-default px-2 py-1"
    :class="[`bg-${backgroundColor}`, `text-${textColor}`, `w-${width}`]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const { backgroundColor, textColor, width } = defineProps<{
  backgroundColor?: string,
  textColor?: string,
  width: string
}>();
</script>

<style scoped>

</style>