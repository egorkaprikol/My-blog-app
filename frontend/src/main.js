import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import BaseRouter from '@/router'

const app = createApp(App)

registerPlugins(app)

app.use(BaseRouter)
app.mount('#app')
