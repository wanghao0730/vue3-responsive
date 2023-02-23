import type { UserConfig, ConfigEnv } from 'vite'
import path, { resolve } from 'path'
import { loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugins'
//地址解析
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     host: "0.0.0.0",
//     open: true,
//   },
// });

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)
  console.log({ root, env })
  //判断当前的执行命令 vite项目这里的command是server 包含的 vite dev
  const isBuild = command === 'build' //true则是生产模式
  // { 更改别名方便对bootstrap的一个引入
  //   "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
  // },
  return {
    base: './',
    resolve: {
      alias: [
        {
          find: '~bootstrap',
          replacement: path.resolve(__dirname, 'node_modules/bootstrap'),
        },
        //这下面的别名方便快速定位文件内容
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: true,
      // open: true,
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: 'dist',
    },
    plugins: createVitePlugins(env, isBuild),
  }
}
