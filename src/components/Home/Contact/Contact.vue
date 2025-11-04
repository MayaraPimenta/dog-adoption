<script setup lang="ts">
import TextInput from '@/components/shared/TextInput.vue';
import HomeTitle from '@/components/Home/HomeTitle.vue';
import ButtonDefault from '@/components/shared/ButtonDefault.vue';
import { ref } from 'vue';
import z from 'zod';

const form = ref({
  name: '',
  phone: '',
  email: '',
  comments: ''
});

const formSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  phone: z.number({ message: 'Esse campo só aceita números' }).min(11, { message: 'O telefone deve ter pelo menos 11 caracteres' }),
  email: z.string().email({ message: 'O e-mail deve ser válido' }),
  comments: z.string().min(10, { message: 'O comentário deve ter pelo menos 10 caracteres' })
});

type formSchemaType = z.infer<typeof formSchema>;

const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null);

const sendForm = () => {
  console.log(form.value);

  const validSchema = formSchema.safeParse(form.value);

  if (!validSchema.success) {
    errors.value = validSchema.error.format();

    return;
  }

  errors.value = null;
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
        <!-- TODO: criar v-for pra inputs -->
        <div class="flex flex-col w-full">
          <TextInput id="name" v-model="form.name" label="Nome" type="text" />
          <div v-if="errors?.name" class="text-red-500 text-xs text-xs">
            <span v-for="(error, index) in errors.name._errors" :key="index">{{ error }}</span>
          </div>
        </div>

        <div class="flex flex-col w-full">
          <TextInput id="phone" v-model="form.phone" label="Telefone" type="number" />
          <div v-if="errors?.phone" class="text-red-500 text-xs">
            <span v-for="(error, index) in errors.phone._errors" :key="index">{{ error }}</span>
          </div>
        </div>

        <div class="flex flex-col w-full">
          <TextInput id="email" v-model="form.email" label="E-mail" type="text" />
          <div v-if="errors?.email" class="text-red-500 text-xs">
            <span v-for="(error, index) in errors.email._errors" :key="index">{{ error }}</span>
          </div>
        </div>
      </div>
      <textarea
        id="comments"
        v-model="form.comments"
        name="comments"
        class="mt-4 tablet:mt-6 w-full h-[200px] rounded-lg border border-black-100 p-3"
        placeholder="Digite seu comentário..."
      />
      <div v-if="errors?.comments" class="text-red-500 text-xs">
        <span v-for="(error, index) in errors.comments._errors" :key="index">{{ error }}</span>
      </div>

      <div class="grid grid-cols-3 gap-6 mt-4">
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