import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
createApp(App).use(ElementPlus,({locale:zhCn})) .use(router).mount('#app')
