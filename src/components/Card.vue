<template>
  <div
    class="card flex flex-col bg-white-100 px-1 pt-1 h-500 w-300 rounded-lg"
    ref="cardItem"
  >
    <main
      class="card__btns h-5/6 w-full bg-cover rounded-lg flex flex-col justify-end items-start text-white p-3"
      v-on="{ dragstart: startDrag, dragend: endDrag }"
    >
      <p class="text-2xl font-semibold">
        Name
      </p>
      
      <div>
        <span class="text-sm">
          Lorem ipsum dolor sit amet.
        </span>
      </div>

      <div>
        <span class="text-sm">
          Lorem ipsum dolor sit amet.
        </span>
      </div>
    </main>

    <footer class="flex items-center justify-around mt-4"> 
      <button @click="leftClick" class="flex justify-center items-center h-12 w-12 bg-white-100 drop-shadow-xl rounded-full">
        <XMarkIcon class="h-6 w-6 text-light-orange"/>
      </button>

      <button @click="rightClick" class="flex justify-center items-center h-12 w-12 bg-white-100 drop-shadow-xl rounded-full">
        <HeartIcon class="h-6 w-6 text-emerald-400" />
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HeartIcon, XMarkIcon } from '@heroicons/vue/24/solid'

let cardItemStart: number = 0;
let cardItemEnd: number = 0;

function leftClick() {
  console.log('left')
}

function rightClick() {
  console.log('right')
}

function startDrag(event: DragEvent) {
  cardItemStart = event.screenX;
}

function endDrag(event: DragEvent) {
  cardItemEnd = event.screenX;
  if (cardItemEnd > cardItemStart) {
    rightClick();
  }

  if (cardItemStart > cardItemEnd) {
    leftClick()
  }
  
} 
</script>

<style lang="scss" scoped>
.card {
  &__btns {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.727) 4%, rgba(79,79,79,0.2329306722689075) 45%, rgba(255,255,255,0) 100%), url('https://hips.hearstapps.com/hmg-prod/images/best-guard-dog-breeds-1648475528.jpg?crop=1.00xw:0.835xh;0,0.0817xh&resize=980:*');
  }
}
</style>