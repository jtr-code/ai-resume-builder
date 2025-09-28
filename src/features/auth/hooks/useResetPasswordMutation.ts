import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { IResetPwdForm } from "../types/auth.types";
import { handleMutationError } from "@/lib/errorHandler";

export const useResetPasswordMutation = (token: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: IResetPwdForm) => authApi.resetPassword(data, token),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        router.replace("/auth/signin");
      }
    },
    onError: (error) => handleMutationError(error, "Reset password failed"),
  });
};
