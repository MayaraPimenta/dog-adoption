<template>
  <div
    ref="cardItem"
    class="card relative flex flex-col bg-white-100 p-4 sm:rounded-lg font-sans w-screen sm:w-auto h-screen sm:h-3/5"
  >
    <component :is="SelectionCard"></component>
  </div>
</template>

<script setup lang="ts">
import SelectionCard from '@/components/cards/SelectionCard.vue';

//como selecionar o component? BRAINSTORM
//após passo estar completo card emite nome do próximo?
</script>

