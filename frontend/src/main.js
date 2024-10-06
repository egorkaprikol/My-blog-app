import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import BaseRouter from '@/router'
import store from '@/store'
const app = createApp(App)

registerPlugins(app)

app.use(store)
app.use(BaseRouter)
app.mount('#app')
