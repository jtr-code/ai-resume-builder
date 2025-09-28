import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authApi } from "../api/auth.api";
import { handleMutationError } from "@/lib/errorHandler";

export const useRegisterMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: authApi.registerUser,
    onSuccess: (response) => {
      if (response.success && response.data.user) {
        toast.success(response.message);
        router.replace("/auth/signin");
      }
    },
    onError: (error) => handleMutationError(error, "Register failed"),
  });
};
