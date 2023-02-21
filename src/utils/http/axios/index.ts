import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from 'axios'
import axios from 'axios'
import { Result } from '/#/axios'
import { cloneDeep } from 'lodash-es'

//设置axios的参数内容
interface IAxiosInstance {
  baseURL: `dev-api`
}

class ReqAxios {
  private axiosInstance: AxiosInstance

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    //设置拦截器
    this.setInterceptor()
  }
  //获取实例对象
  getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  //请求头的设置
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }
  //设置请求拦截以及相应拦截
  setInterceptor() {
    //请求拦截
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig): any => {
        //设置请求头或者判断是否携带token之类
        // console.log("拦截请求", { config });
        return config
      },
    )
    //响应拦截
    this.axiosInstance.interceptors.response.use(
      (config: AxiosResponse<any>) => {
        console.log('响应拦截', { config })
        //判断状态码或者其他

        return config.data
      },
    )
  }

  /**
   * 其他类型请求调用request
   */
  get<T = any>(config: AxiosRequestConfig, options?: any): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options)
  }

  post<T = any>(config: AxiosRequestConfig, options?: any): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options)
  }
  put<T = any>(config: AxiosRequestConfig, options?: any): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options)
  }

  delete<T = any>(config: AxiosRequestConfig, options?: any): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options)
  }
  /**
   * 请求函数
   * @param config 请求携带的参数
   * @param options 其他自定义的配置信息
   */
  request<T = any>(config: AxiosRequestConfig, options?: any): Promise<any> {
    //传入的配置进行个拷贝
    let conf: AxiosRequestConfig = cloneDeep(config)
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export const reqAxios = new ReqAxios({
  baseURL: 'dev-api',
  timeout: 3 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})
