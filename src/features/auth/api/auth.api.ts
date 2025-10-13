import { api } from "@/lib/axiosInterceptor";
import {
  FORGOT_PASSWORD,
  LOG_OUT,
  LOGIN_USER,
  REFRESH_TOKEN,
  REGISTER_USER,
  RESET_PASSWORD,
} from "./apiBaseUrls";
import {
  ILoginForm,
  IRegisterForm,
  IForgotPwdForm,
  IResetPwdForm,
} from "../types/auth.types";
import axios from "axios";

export const plainApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const authApi = {
  loginUser: async (data: ILoginForm) => (await api.post(LOGIN_USER, data)).data,

  registerUser: async (data: IRegisterForm) =>
    (await api.post(REGISTER_USER, data)).data,

  forgotPassword: async (data: IForgotPwdForm) =>
    (await api.post(FORGOT_PASSWORD, data)).data,

  resetPassword: async (data: IResetPwdForm, token: string) =>
    (await api.patch(RESET_PASSWORD(token), data)).data,

  logOut: async () => (await plainApi.post(LOG_OUT)).data,

  refreshToken: async () => (await plainApi.post(REFRESH_TOKEN)).data,
};
