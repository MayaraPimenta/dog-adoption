<script setup lang="ts">
import { reactive } from 'vue';
import ButtonDefault from '@/shared/components/ButtonDefault.vue';
import Card from '@/shared/components/Card/Card.vue';
import TextInput from '@/shared/components/TextInput.vue';

const form = reactive({
  name: '',
  password: '',
});
</script>

<template>
  <main class="h-[calc(100vh-152px)] flex items-center justify-center">
    <Card background-color="bg-secondary-blue" class="mobile:mx-10 tablet:max-w-100 p-8">
      <h1 class="text-3xl font-semibold font-serif text-center">
        Login
      </h1>

      <section>
        <form class="flex flex-col items-center justify-center">
          <div class="w-full flex flex-col gap-4 mt-6 mb-8">
            <TextInput
              id="name"
              v-model="form.name"
              label="Nome"
              type="text"
            />
            <TextInput
              id="password"
              v-model="form.password"
              label="Senha"
              type="password"
            />
          </div>
          <ButtonDefault type="submit" background-color="bg-primary">
            Login
          </ButtonDefault>
        </form>
      </section>
    </Card>
  </main>
</template>
