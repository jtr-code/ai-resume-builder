import { api } from "@/lib/axiosInterceptor";
import { LOGIN_USER } from "./apiBaseUrls";
import { ILoginForm } from "../types/auth.types";

export const authApi = {
  loginUser: async (data: ILoginForm) => {
    const response = await api.post(LOGIN_USER, data);
    return response.data;
  },
};
