<template>
  <div
    ref="cardItem"
    class="card relative flex flex-col bg-white-100 p-4 h-500 w-300 rounded-lg font-sans"
  >
    <component :is="SelectionCard"></component>
  </div>
</template>

<script setup lang="ts">
import SelectionCard from '@/components/cards/SelectionCard.vue';

//como selecionar o component? BRAINSTORM
//após passo estar completo card emite nome do próximo?
</script>

