<script setup lang="ts">
import type { FunctionalComponent } from 'vue';

const props = defineProps<{
  icon: FunctionalComponent,
  text: string,
  backgroundColor?: string
}>();
</script>

<template>
  <div
    class="flex items-center gap-4 border border-solid border-black-100 rounded-lg p-5 text-sm"
    :class="`bg-${backgroundColor}`"
  >
    <span class="rounded-full border border-solid border-black-100 p-2 bg-background-100">
      <component :is="icon" class="w-6 h-6 text-black-100" />
    </span>
    <p>{{ text }}</p>
  </div>
</template>