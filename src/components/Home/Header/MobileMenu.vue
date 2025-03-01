<template>
  <div class="absolute right-0 flex flex-col gap-3 top-0 p-4 bg-secondary-red h-full w-3/5">
    <button class="w-fit self-end" @click="() => emit('close-menu')">
      <XMarkIcon class="w-8" />
    </button>

    <a
      v-for="(option, index) in options"
      :key="index"
      class="text-sm"
    >
      {{ option }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/16/solid';

const { options } = defineProps<{
  options: Array<string>,
}>();

const emit = defineEmits<{
  (e: 'close-menu'): void;
}>();
</script>

<style scoped>

</style>