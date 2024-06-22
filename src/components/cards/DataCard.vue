<template>
  <main
    class="card__main min-w-[320px] h-5/6 w-full bg-cover rounded-lg
    flex flex-col justify-end items-start text-white p-3 z-0"
    v-on="{ dragstart: startDrag, dragend: endDrag }"
  >
    <p class="text-2xl font-semibold">
      Name
    </p>

    <div>
      <span class="text-sm">
        caracteristicas
      </span>
    </div>

    <div>
      <span class="text-sm">
        Lorem ipsum dolor sit amet.
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

  <div class="flex items-center ">
    <ChevronLeftIcon class="h-6 w-6 text-light-orange"/>
    <ChevronRightIcon class="h-6 w-6 text-light-orange"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HeartIcon, XMarkIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import MatchCard from './MatchCard.vue';

let cardItemStart = 0;
let cardItemEnd = 0;
const match = ref<boolean>(false);

function leftClick() {
  console.log('left');
}

function rightClick() {
  match.value = true;
}

function startDrag(event: DragEvent) {
  cardItemStart = event.screenX;
}

function endDrag(event: DragEvent) {
  cardItemEnd = event.screenX;
  if (cardItemEnd > cardItemStart) {
    leftClick();
  }

  if (cardItemStart > cardItemEnd) {
    rightClick();
  }

}
</script>

<style lang="scss" scoped>
.card {
  &__main {
    background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.727) 4%, rgba(79,79,79,0.2329306722689075)
    45%, rgba(255,255,255,0) 100%),
    url('../../assets/img/labels-img.jpeg');
  }
}
</style>