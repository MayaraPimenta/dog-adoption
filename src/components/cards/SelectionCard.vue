<template>
  <section class="flex flex-col justify-between gap-4 max-w-lg h-full">
    <!-- <section class="flex flex-col items-start gap-2 w-full">
      <label for="name" class="text-sm font-semibold">Digite seu nome:</label>
      <input
        v-model="name"
        type="text"
        name="name"
        class="w-full max-w-xl h-9 rounded-md text-xs p-2"
        placeholder="Digite seu nome completo"
      >
    </section> -->

    <section class="flex flex-col gap-5 w-full">
      <label  class="text-3xl font-bold">
        Como é seu novo pet?
      </label>

      <div class="flex flex-wrap gap-3 gap-y-4">
        <TagElement
          v-for="(item, index) in list"
          :id="`item-${index}`"
          :key="index"
          :text="item"
          :class="{ 'bg-orange-200': isSelected(item) }"
          @button-event="selectItems(item)"
        >
          {{ item }}
        </TagElement>
      </div>
    </section>

    <button
      class="text-amber-500 w-16 bg-orange-100 rounded-full self-end p-2
      transition-all hover:-translate-y-1 hover:scale-105"
      @click="nextCard"
    >
      <ChevronRightIcon />
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TagElement from '@/components/common/TagElement.vue';
import { ChevronRightIcon } from '@heroicons/vue/16/solid';
import { useSelectionStore } from '@/stores/selection';

//vars
const list = ref<string[]>([
  'pequeno porte', 'médio porte', 'grande porte',
  'pêlo curto', 'pêlo longo', 'filhote', 'adulto',
  'idoso', 'muita energia', 'quieto', 'bom com outros cães',
  'interage bem com crianças', 'gosta de ficar sozinho'
]);
const characteristics = ref<string[]>([]);
const emits = defineEmits(['nextStep']);
const store = useSelectionStore();

//functions
const selectItems = (item: string) => {
  const foundItem = characteristics.value.findIndex((el: string) => el === item);

  if (foundItem !== -1) {
    return characteristics.value.splice(foundItem, 1);
  }
  characteristics.value.push(item);

  if (characteristics.value.length > 2) {
    characteristics.value.shift();
  }
};
const isSelected = (item: string):boolean => characteristics.value.includes(item);

const nextCard = () => {
  store.setCharacteristics(characteristics.value);

  emits('nextStep', 'DataCard');
}

//TODO:
// Adicionar validação: Limitar numero de escolha de caracteristicas
</script>

<style scoped>

</style>