import { createApp } from 'vue'
import App from './App.vue'
import Indication from './components/indication.vue'

const app = createApp(App);
app.component('indication ', Indication);
app.mount('#app');
