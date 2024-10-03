// import '/src/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import '/src/assets/styles/css/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
