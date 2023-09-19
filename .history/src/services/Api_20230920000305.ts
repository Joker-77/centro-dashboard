/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable prefer-template */
/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
/* eslint-disable */
import axios from "axios";
import TokenService from "./TokenService";

const API_URL = "https://back.trendfuture.shop/api";
// const API_URL = "https://www.trendfuture.shop/api/welcome2";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

instance.interceptors.request.use(
  (config: any) => {
    // const token = TokenService.getLocalAccessToken();
    let token = "";
    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // for Spring Boot back-end
      //   config.headers['x-access-token'] = token // for Node.js Express back-end
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res: any) => {
    return res;
  },
  async (err: any) => {
    const originalConfig = err.config;
    console.log(err)
    if (originalConfig.url !== "/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          // const rs = await instance.post("/authentication/refresh", {
          //   refresh: TokenService.getLocalRefreshToken(),
          // });
          // const accessToken = rs.data.access;
          // TokenService.updateLocalAccessToken(accessToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default instance;