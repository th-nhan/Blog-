import { createApp } from 'vue'
import { createPinia } from 'pinia' // ✅ Import Pinia
import App from './App.vue'
import router from './router'

const pinia = createPinia() // ✅ Tạo instance Pinia

const app = createApp(App)
app.use(pinia) // ✅ Đăng ký Pinia trước khi sử dụng store
app.use(router)
app.mount('#app')
