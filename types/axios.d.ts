/**
 * 这里可以定义各种请求参数的配置 作为状态码等
 */
export type reqTtype = "success" | "error" | "waring";

export interface Result<T = any> {
  code: number;
  type: reqTtype;
  message: string;
  result: T;
}
