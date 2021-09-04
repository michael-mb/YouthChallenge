import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "../public/components/base/base.css"
import "../public/components/base/script.js"
import "../public/components/base/core.min.js"

createApp(App).use(store).use(router).mount('#app')
