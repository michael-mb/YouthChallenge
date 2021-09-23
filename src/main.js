import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

router.beforeResolve( () =>{
    if(!sessionStorage.getItem('reloaded'))
        document.getElementById("big-page").remove()
})

router.afterEach(() =>{
    beforeCreate()
})

function beforeCreate() {
    if(sessionStorage.getItem('reloaded')) {
        sessionStorage.removeItem('reloaded');
    } else {
        sessionStorage.setItem('reloaded', '1');
        location.reload()
    }
}

createApp(App).use(store).use(router).mount('#app')
