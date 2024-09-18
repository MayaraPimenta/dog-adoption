<template>
  <button
    class="text-sm py-2 px-4 rounded-3xl bg-gray-200 transition-all hover:-translate-y-1 hover:scale-105"
    @click="buttonClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
const emit = defineEmits(['buttonEvent']);

const buttonClick = () => {
  emit('buttonEvent');
};
</script>