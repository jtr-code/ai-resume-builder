import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authApi } from "../api/auth.api";
import { handleMutationError } from "@/lib/errorHandler";

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: authApi.loginUser,
    onSuccess: (response) => {
      if (response.success && response.data.user) {
        toast.success(response.message);
        router.replace("/builder/contact");
      }
    },
    onError: (error) => handleMutationError(error, "Login failed"),
  });
};
