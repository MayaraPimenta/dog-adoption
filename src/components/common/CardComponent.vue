<template>
  <div
    ref="cardItem"
    class="card relative flex flex-col bg-white-100 p-6 sm:rounded-lg font-sans
    w-screen sm:w-auto h-screen sm:h-3/5"
  >
    <KeepAlive>
      <component
        :is="steps[currentStep]"
        :selected-dog="dogList[index]"
        @next-step="nextStep"
      >
      </component>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import SelectionCard from '@/components/cards/SelectionCard.vue';
import { ref } from 'vue';
import DataCard from '@/components/cards/DataCard.vue';
import type { Component } from 'vue';
import { useSelectionStore } from '@/stores/selection';

interface IComponents {
  [key: string]: Component;
}
const currentStep = ref('SelectionCard');
const steps = ref<IComponents>({
  SelectionCard,
  DataCard
});
const dogList = ref([
  {
    size: 'pequeno porte',
    hair: 'pêlo longo',
    age: 'adulto',
    energy: 'muita energia',
    interaction: 'bom com outros cães'
  },
  {
    size: 'pequeno porte',
    hair: 'pêlo curto',
    age: 'filhote',
    energy: 'quieto',
    interaction: 'interage bem com crianças'
  },
  {
    size: 'grande porte',
    hair: 'pêlo curto',
    age: 'idoso',
    energy: 'quieto',
    interaction: 'gosta de ficar sozinho'
  },
]);
const index = ref(0);
const store = useSelectionStore();

const nextStep = (stepName: string) => {
  currentStep.value = stepName;
};

// TODO:
// - Filtrar o array dogList pela characteristicsList (talvez o characteristics list tenha que ser de objetos e n string)
// - Randomizar o array
// - Criar metodo para selecionar o index a cada clique
</script>

