<script setup lang="ts">
const props = withDefaults(defineProps<{
  align?: string
}>(), {
  align: 'center'
});
</script>

<template>
  <h1
    class="font-serif text-3xl tablet:text-5xl font-semibold"
    :class="`text-${align}`"
  >
    <slot />
  </h1>
</template>