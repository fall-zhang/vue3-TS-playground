import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
import '@/assets/styles/global.css'
import '@/assets/styles/element-cover.scss'
// import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(Router)
app.mount('#app')
