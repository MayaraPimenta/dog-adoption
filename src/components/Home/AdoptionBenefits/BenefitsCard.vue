<script setup lang="ts">
const props = defineProps<{
  content: string
}>();
</script>

<template>
  <div>
    {{ content }}
  </div>
</template>

