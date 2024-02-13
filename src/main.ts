import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
//import router from './router'

const app = createApp(App)

app.use(createPinia())
//app.use(router)
VueQueryPlugin.install( app, {
    queryClientConfig: {
        defaultOptions:  {
            queries: {
                gcTime: 100 * 30, // 1 minuto
            }
        }
    }
})

app.mount('#app')
