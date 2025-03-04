<script setup lang="ts">
import TextInput from '@/components/shared/TextInput.vue';
import HomeTitle from '@/components/Home/HomeTitle.vue';
import ButtonDefault from '@/components/shared/ButtonDefault.vue';
import { ref } from 'vue';

const name = ref('');
const phone = ref('');
const email = ref('');
const comments = ref('');

const sendForm = () => {
  console.log(name.value, phone.value, email.value, comments.value);
};
</script>

<template>
  <section class="bg-secondary-green py-12 tablet:px-24">
    <div class="max-size">
      <HomeTitle>
        Fale com a gente
      </HomeTitle>
      <p class="text-center mt-4">Entre em contato conosco tire dúvidas, saiba como apoiar o projeto e mais.</p>

      <div class="flex flex-col gap-4 tablet:gap-6 tablet:flex-row mt-6">
        <TextInput id="name" v-model="name" label="Nome" type="text" />
        <TextInput id="phone" v-model="phone" label="Telefone" type="number" />
        <TextInput id="email" v-model="email" label="E-mail" type="text" />
      </div>
      <textarea
        id="comments"
        v-model="comments"
        name="comments"
        class="mt-4 tablet:mt-6 mb-4 w-full h-[200px] rounded-lg border border-black-100 p-2"
        placeholder="Digite seu comentário..."
      />

      <div class="grid grid-cols-3 gap-6">
        <ButtonDefault
          class="col-start-1 tablet:col-start-3 col-end-4"
          background-color="primary"
          :full="true"
          @btn-click="sendForm"
        >
          Enviar
        </ButtonDefault>
      </div>
    </div>
  </section>
</template>