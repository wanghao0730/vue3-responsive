/**
 * 用于返回响应数据
 */
export function resultResponse<T = any>(result: T, { message = "ok" } = {}) {
  return {
    code: 200,
    result,
    message,
    type: "success",
  };
}
