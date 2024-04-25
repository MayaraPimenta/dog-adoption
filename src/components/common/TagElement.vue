<template>
  <button
    class="text-xs py-1 px-2 rounded-xl bg-gray-200"
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