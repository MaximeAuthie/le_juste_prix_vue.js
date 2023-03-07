import { createApp } from 'vue'
import App from './App.vue'
import IndicationDiv from './components/IndicationDiv'
import PriceForm from './components/PriceForm'

const app = createApp(App);
app.component('div-indication', IndicationDiv);
app.component('price-form', PriceForm)
app.mount('#app');
