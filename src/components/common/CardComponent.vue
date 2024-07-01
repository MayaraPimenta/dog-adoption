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
    id: 0,
    nome: 'Bob',
    img: '../../assets/img/labels-img.jpeg',
    caracteristicas: ['pequeno porte', 'pêlo longo', 'adulto', 'muita energia', 'bom com outros cães']
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
const index = ref(0);
const store = useSelectionStore();
const result = ref();

const nextStep = (stepName: string) => {
  currentStep.value = stepName;

  if (store.characteristicsList) {
    result.value = dogList.value.filter(item => item.caracteristicas.includes(store.characteristicsList[0] && store.characteristicsList[1]));
  }
};

// TODO:
// - Filtrar o array dogList pela characteristicsList (talvez o characteristics list tenha que ser de objetos e n string) -OK
// - Criar tipo dog com id, caracteristicas e image
// - Randomizar o array
// - Criar metodo para selecionar o index a cada clique
</script>

