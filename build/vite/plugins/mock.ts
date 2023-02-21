/**
 * 这里使用到的vite-plugin-mock 详细使用参照下面github地址
 * https://github.com/vbenjs/vite-plugin-mock
 */
import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock', //设置mock文件存储目录
    localEnabled: true, //设置是否启用本地mock文件
    prodEnabled: true, //设置打包是否启用 mock 功能
    watchFiles: true, //设置是否监视mockPath对应的文件夹内文件中的更改
    // localEnabled: !isBuild,
    // prodEnabled: isBuild,
    // injectCode: `
    //   import { setupProMockServer } from '../mock/_createProductionServer';
    //   setupProMockServer()
    // `,
    injectCode: `
      import { setupProMockServer } from '../mock/_createProductionServer';
      setupProMockServer()
    `,
    logger: true, //是否在控制台显示请求日志
  })
}
