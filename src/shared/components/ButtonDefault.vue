<script setup lang="ts">
import type { BackgroundColor } from '@/shared/types/style.d';

const { backgroundColor = 'bg-secondary-red', textColor = 'black-100', full } = defineProps<{
  backgroundColor?: BackgroundColor;
  textColor?: string;
  full?: boolean;
}>();

const emit = defineEmits<{
  (e: 'btnClick'): void;
}>();
</script>

<template>
  <button
    class="hover-scale border border-black-100 rounded-lg shadow-default px-6 py-2 text-sm cursor-pointer"
    :class="$cn(`${backgroundColor}`, `text-${textColor}`, full ? 'w-full' : '')"
    @click="() => emit('btnClick')"
  >
    <slot />
  </button>
</template>
