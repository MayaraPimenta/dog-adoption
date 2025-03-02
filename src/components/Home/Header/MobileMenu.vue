<template>
  <div class="fixed right-0 flex flex-col gap-3 top-0 p-4 bg-primary h-full w-2/4">
    <button class="w-fit self-end" @click="() => emit('close-menu')">
      <XMarkIcon class="w-8" />
    </button>

    <router-link
      v-for="(option, index) in options"
      :key="index"
      :to="option.url"
      class="text-sm font-medium"
    >
      {{ option.name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { NavOptions } from '@/types/Header/navOptions';
import { XMarkIcon } from '@heroicons/vue/16/solid';

const { options } = defineProps<{
  options: NavOptions[],
}>();

const emit = defineEmits<{
  (e: 'close-menu'): void;
}>();
</script>

<style scoped>

</style>