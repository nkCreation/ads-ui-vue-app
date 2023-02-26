import { ComponentLibrary } from 'ads-ui-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ComponentLibrary)

app.mount('#app')
