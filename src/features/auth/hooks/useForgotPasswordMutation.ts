import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { authApi } from "../api/auth.api";
import { handleMutationError } from "@/lib/errorHandler";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
      }
    },
    onError: (error) =>
      handleMutationError(error, "Failed to sent forgot password link"),
  });
};
