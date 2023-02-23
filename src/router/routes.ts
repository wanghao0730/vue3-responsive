/**
 * 动态路由加载
 */
import type { RouteRecordRaw } from 'vue-router'

const ROUTER_RECORDS: RouteRecordRaw[] = []

//获取到layout的内容
const layoutModules: any = import.meta.glob('../layouts/**/*.vue', {
  eager: true,
})
console.log({ layoutModules })

//利用vite import.meta加载文件
const modules: any = import.meta.glob('../views/**/*.vue', { eager: true })

//根据路由获取子路由
const getLayouts = function (module: any) {
  return module && module.replace(/.+\/layouts\/|\.vue/gi, '')
}
//获取子路由
const getRouterName = function (module: any) {
  return module && module.replace(/.+\/views\/|\.vue/, '')
}
for (const module in layoutModules) {
  const layoutName = getLayouts(module)
  //判断是否有数据
  const routes = getRouter(layoutName)
  ROUTER_RECORDS.push({
    path: '/' + layoutName,
    component: layoutModules[module].default,
    children: routes,
  })
}

function getRouter(name: string) {
  const obj: any[] = []
  Object.keys(modules).forEach(route => {
    const routeName = getRouterName(route).split('/')
    if (name && name === routeName[0]) {
      obj.push({
        path: routeName[1].split('.')[0],
        component: modules[route].default,
      })
    }
  })
  return obj
}
console.log({ ROUTER_RECORDS })

export default ROUTER_RECORDS
