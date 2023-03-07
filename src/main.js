import { createApp } from 'vue'
import App from './App.vue'
import IndicationDiv from './components/IndicationDiv'

const app = createApp(App);
app.component('div-indication', IndicationDiv);
app.mount('#app');
