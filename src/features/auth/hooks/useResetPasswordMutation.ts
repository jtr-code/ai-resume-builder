import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { IResetPwdForm } from "../types/auth.types";

export const useResetPasswordMutation = (token: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: IResetPwdForm) => authApi.resetPassword(data, token),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        router.replace("/auth/login");
      }
    },
    onError: (error: unknown) => {
      let message = "Something went wrong!";
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as AxiosError<{ message: string }>;
        message =
          axiosError.response?.data?.message ?? axiosError.message ?? message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
      console.log("Reset password failed:", error);
    },
  });
};
