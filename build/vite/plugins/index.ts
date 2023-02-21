import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
//mockjs
import { configMockPlugin } from "./mock";

export function createVitePlugins(vite: any, isBuild: boolean) {
  //默认安装的plugin 后续追加就加入这个数组当中
  console.log("he", { vite, isBuild });
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    //默认就需要将vue加入plugins
    vue(),
  ];

  //追加plugin数组 mockjs
  vitePlugins.push(configMockPlugin(isBuild));

  //更多功能的操作

  return vitePlugins;
}
