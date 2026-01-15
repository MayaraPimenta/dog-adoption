<script setup lang="ts">
const props = defineProps<{
  content: string
}>();
</script>

<template>
  <article
    class="text-center p-5 text-sm bg-background-100 flex items-start justify-center
    rounded-lg border border-solid border-black-100 shadow-card
    hover-scale hover:bg-primary"
  >
    {{ content }}
  </article>
</template>

