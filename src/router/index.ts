//router数组中每个对象的数据类型
// import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import autoRouters from './routes'
import basic from './basic'
//是否hash类型的router
import { createRouter, createWebHistory } from 'vue-router'

//配置白名单 可以直接访问的页面
// const WHITE_LIST: string[] = []

const router = createRouter({
  history: createWebHistory(),
  routes: [...basic, ...autoRouters],
  //是否禁用尾部斜杠
  strict: true,
})
// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
