import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "../styleguide.sass"
import "../globals.sass"

createApp(App).use(store).mount('#app')