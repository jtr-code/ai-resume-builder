import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  function (config) {
    console.log(config, "config");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function onFulfilled(response) {
    console.log("response interceptor", response);
    return response;
  },
  function onRejected(error) {
    // if (error.response?.status === 401) {
    //   // await refreshToken();
    //   return api(error.config); // Retry original request
    // }
    console.log(error, "error interceptor");
    return Promise.reject(error);
  }
);
