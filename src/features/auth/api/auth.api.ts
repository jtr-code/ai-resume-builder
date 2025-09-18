import { api } from "@/lib/axiosInterceptor";
import { ILoginForm } from "../types/auth.types";
import { LOGIN_USER } from "./apiBaseUrls";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (data: ILoginForm) => {
      const res = await api.post(LOGIN_USER, data);
      return res.data;
    },
  });
};
