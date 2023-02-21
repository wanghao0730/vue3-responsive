/**
 * 该文件用于创建生产模式下也能使用mock
 */
//拿到createProdMockServer
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

//获取到mock下面的所有接口文件
const modules: any = import.meta.globEager('./**/*.ts')

const mockModules: any[] = []
console.log('查看拿到的modules', modules)
Object.keys(modules).forEach(key => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

//生产环境下使用需要导入所有的模块
export function setupProMockServer() {
  createProdMockServer(modules)
}
