import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router';
import VueSplide from '../node_modules/@splidejs/vue-splide';

// Create a Vue app instance
const app = createApp(App);

// Use Vue Router
app.use(router);

// Use Vue Splide
app.use(VueSplide);

// Mount the app
app.mount('#app');

