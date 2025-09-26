import { api } from "@/lib/axiosInterceptor";
import {
  FORGOT_PASSWORD,
  LOG_OUT,
  LOGIN_USER,
  REGISTER_USER,
  RESET_PASSWORD,
} from "./apiBaseUrls";
import {
  ILoginForm,
  IRegisterForm,
  IForgotPwdForm,
  IResetPwdForm,
} from "../types/auth.types";

export const authApi = {
  loginUser: async (data: ILoginForm) => {
    const response = await api.post(LOGIN_USER, data);
    return response.data;
  },

  registerUser: async (data: IRegisterForm) => {
    const response = await api.post(REGISTER_USER, data);
    return response.data;
  },

  forgotPassword: async (data: IForgotPwdForm) => {
    const response = await api.post(FORGOT_PASSWORD, data);
    return response.data;
  },

  resetPassword: async (data: IResetPwdForm, token: string) => {
    const response = await api.patch(RESET_PASSWORD(token), data);
    return response.data;
  },

  logOut: async () => {
    const response = await api.post(LOG_OUT);
    return response.data;
  },
};
