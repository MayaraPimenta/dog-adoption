<script setup lang="ts">
import type { BackgroundColor } from '@/shared/types/style.d';

const props = withDefaults(defineProps<{
  backgroundColor?: BackgroundColor;
}>(), {
  backgroundColor: 'bg-primary',
});
</script>

<template>
  <article :class="$cn('p-4', 'rounded-lg', 'shadow-default', 'w-full', `${props.backgroundColor}`)">
    <slot />
  </article>
</template>
