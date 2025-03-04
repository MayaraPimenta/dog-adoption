<script setup lang="ts">
import { defineModel } from 'vue';

const props = defineProps<{
  id: string,
  label?: string,
  placeholder?: string
}>();

const model = defineModel();
</script>

<template>
  <div class="w-full flex flex-col gap-2 text-sm font-medium">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="model"
      :placeholder="placeholder"
      class="w-full h-[40px] rounded-lg border border-black-100 p-2"
      type="text"
    >
  </div>
</template>