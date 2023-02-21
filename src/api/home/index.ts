import { reqAxios } from "/@/utils/http/axios";

enum Api {
  GetHomeList = "/home",
}

export const getHomeList = () => {
  return reqAxios.get({ url: Api.GetHomeList });
};
