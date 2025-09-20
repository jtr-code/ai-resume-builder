import { api } from "@/lib/axiosInterceptor";
import { LOGIN_USER, REGISTER_USER } from "./apiBaseUrls";
import { ILoginForm, IRegisterForm } from "../types/auth.types";

export const authApi = {
  loginUser: async (data: ILoginForm) => {
    const response = await api.post(LOGIN_USER, data);
    return response.data;
  },

  registerUser: async (data: IRegisterForm) => {
    const response = await api.post(REGISTER_USER, data);
    return response.data;
  },
};
