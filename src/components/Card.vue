<template>
  <div
    class="card"
    @touchstart="swipeCard()"
  >
    <div class="card__btns">
      <button @click="leftClick">
        LEFT
      </button>

      <button @click="rightClick">
        RIGHT
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
function leftClick() {
  console.log('left')
}

function rightClick() {
  console.log('right')
}

function swipeCard() {
  console.log('this');
} 
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #000;
  height: 500px;
  width: 300px;

  &__btns {
    display: flex;
    justify-content: space-between;
  }
}
</style>