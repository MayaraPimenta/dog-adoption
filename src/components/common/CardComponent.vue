<template>
  <div
    ref="cardItem"
    class="card relative flex flex-col bg-white-100 p-6 sm:rounded-lg font-sans
    w-screen sm:w-auto h-screen sm:h-3/5"
  >
    <KeepAlive>
      <component
        :is="steps[currentStep]"
        :selected-dog="result[index]"
        :list-length="result.length"
        @next-step="nextStep"
        @next-card="nextCard"
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
    id: 0,
    nome: 'Bob',
    img: '../../assets/img/labels-img.jpeg',
    caracteristicas: ['pequeno porte', 'pêlo longo', 'filhote', 'muita energia', 'bom com outros cães']
  },
  {
    id: 1,
    nome: 'Cão',
    img: '../../assets/img/labels-img.jpeg',
    caracteristicas: ['pequeno porte', 'pêlo curto', 'filhote', 'quieto', 'interage bem com crianças']
  },
  {
    id: 2,
    nome: 'Costelinha',
    img: '../../assets/img/labels-img.jpeg',
    caracteristicas: ['grande porte', 'pêlo curto', 'idoso', 'quieto', 'gosta de ficar sozinho']
  },
]);

interface Dog {
  id: number,
  nome: string,
  img: string,
  caracteristicas: string[]
}

const index = ref(0);
const store = useSelectionStore();
const result = ref<Dog[]>([]);

const nextStep = (stepName: string) => {
  currentStep.value = stepName;

  if (store.characteristicsList) {
    result.value = dogList.value.filter(item =>
    item.caracteristicas.includes(store.characteristicsList[0] && store.characteristicsList[1]));
  }
};
const nextCard = () => {
  if (index.value === result.value.length-1) {
    index.value = 0;

    return;
  }

  index.value++;
};
// TODO:
// - Criar arquivo de tipos e inserir dog
// - fazer imgs funcionar
// - consertar warnings
</script>

