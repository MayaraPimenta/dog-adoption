<template>
  <button
    class="absolute -left-20 top-0 bottom-0 my-auto flex justify-center items-center
  h-12 w-12 bg-white-100/50 drop-shadow-xl rounded-full">
    <ChevronLeftIcon class="h-6 w-6 text-light-orange"/>
  </button>

  <main
    class="card__main min-w-[320px] max-w-sm h-5/6 w-full bg-cover rounded-lg bg-black
    flex flex-col justify-end items-start text-white p-3 z-0"
    :style="{ 'background-image': props.selectedDog.img }"
    v-on="{ dragstart: startDrag, dragend: endDrag }"
  >
    <p class="text-2xl font-semibold">
      {{ props.selectedDog.nome }}
    </p>

    <div>
      <span
        class="text-sm normal-case"
      >
        {{ props.selectedDog.caracteristicas.join(', ') }}
      </span>
    </div>
  </main>
  <MatchCard v-if="match" />

  <footer class="flex items-center justify-around mt-4">
    <button
      class="flex justify-center items-center h-12 w-12 bg-white-100 drop-shadow-xl rounded-full"
      @click="leftClick"
    >
      <XMarkIcon class="h-6 w-6 text-light-orange"/>
    </button>

    <button
      class="flex justify-center items-center h-12 w-12 bg-white-100 drop-shadow-xl rounded-full"
      @click="rightClick"
    >
      <HeartIcon class="h-6 w-6 text-emerald-400" />
    </button>
  </footer>

  <button
    class="absolute -right-20 top-0 bottom-0 my-auto flex justify-center items-center
    h-12 w-12 bg-white-100/50 drop-shadow-xl rounded-full"
    @click="next()"
  >
    <ChevronRightIcon class="h-6 w-6 text-light-orange"/>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HeartIcon, XMarkIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import MatchCard from './MatchCard.vue';

interface Dog {
  id: number,
  nome: string,
  img: string,
  caracteristicas: string[]
}

let cardItemStart = 0;
let cardItemEnd = 0;
const match = ref<boolean>(false);
const props = defineProps<{
  selectedDog: Dog,
  listLength: 1
}>();
const emits = defineEmits(['nextCard']);

const leftClick = () => {
  console.log('to the left, to the left');
};
const rightClick = () => {
  match.value = true;
};
const startDrag = (event: DragEvent) => {
  cardItemStart = event.screenX;
};
const endDrag = (event: DragEvent) => {
  cardItemEnd = event.screenX;
  if (cardItemEnd > cardItemStart) {
    leftClick();
  }

  if (cardItemStart > cardItemEnd) {
    rightClick();
  }
};
const next = () => {
  emits('nextCard');
};
</script>