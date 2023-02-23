import { createApp } from 'vue'
import App from './App.vue'
//样式导入
import 'normalize.css'
import 'animate.css'
import 'wow.js/css/libs/animate.css'
//导入所有的bootstrap样式
import './scss/global.scss'
import 'bootstrap'
import 'font-awesome/css/font-awesome.css'
import './router/routes'

//导入所有的bootstrap js或者自定义导入
// import Alert from "bootstrap/js/dist/alert";
//导入路由
import { setupRouter } from './router'
async function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  //进行各种配置
  app.mount('#app')
}

bootstrap()
