import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import animate from 'animate.css'

const app = createApp(App)
 
app.use(router)
   .use(ElementPlus)
   .use(animate)
// app.config.globalProperties.$echarts = echarts

//全局引入图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
