import { createApp } from "vue";
import App from "./App.vue";
//样式导入
import "normalize.css";
import "./style.css";
//导入所有的bootstrap样式
import "./scss/global.scss";
//导入所有的bootstrap js或者自定义导入
// import Alert from "bootstrap/js/dist/alert";

async function bootstrap() {
  const app = createApp(App);
  //进行各种配置
  app.mount("#app");
}

bootstrap();
