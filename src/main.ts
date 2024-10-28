// import '/src/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import '/src/assets/styles/css/main.css'


const app = createApp(App)


// Initialisation d'AOS
app.config.globalProperties.$aos = AOS.init({
    duration: 800, // Durée de l'animation
    once: true,    // L'animation se déclenche une seule fois
});

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
