<template>
  <section>
    <label for="name">Digite seu nome:</label>
    <input v-model="name" type="text" name="name">
  </section>

  <section>
    <h1>
      Como é seu novo pet?
    </h1>

    <div class="flex flex-wrap gap-1">
      <TagElement
        v-for="(item, index) in list"
        :id="`item-${index}`"
        :key="index"
        :text="item"
        @button-event="selectItems(item)"
      >
        {{ item }}
      </TagElement>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineModel } from 'vue';
import TagElement from '@/components/common/TagElement.vue';

const list = ref<string[]>([
  'pequeno porte', 'médio porte', 'grande porte',
  'pêlo baixo', 'pêlo longo', 'filhote', 'adulto',
  'idoso', 'muita energia', 'quieto', 'bom com outros cães',
  'interage bem com crianças'
]);
const items = ref<string[]>([]);
const selected = ref<boolean>(false);
const name = defineModel();

const selectItems = (item: string) => {
  const foundItem = items.value.findIndex((el: string) => el === item);

  if (foundItem !== -1) {
    items.value.splice(foundItem, 1);

    return console.log(items.value);
  }
  items.value.push(item);
  selected.value = true;

  console.log(items.value);

  //ao clicar confere se string existe na lista, se n existir adiciona e muda cor,
  //se existir apaga e retorna cor original
  //chamar componente tag
};
</script>

<style scoped>

</style>