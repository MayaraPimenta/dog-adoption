import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from '@/shared/router';
import { cn } from '@/shared/utils/cn';
import App from './App.vue';
import '@/index.css';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.config.globalProperties.$cn = cn;

app.mount('#app');
