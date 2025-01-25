import { createApp } from 'vue';
import App from './app/index.vue';
import "./domain/firebase.ts";
import router from './router';

const app = createApp(App)

app.use(router)

app.mount('#app')
