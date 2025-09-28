import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { handleMutationError } from "@/lib/errorHandler";

export const useLogoutMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: authApi.logOut,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        router.replace("/auth/signin");
        router.refresh();
      }
    },
    onError: (error) => handleMutationError(error, "Logout failed"),
  });
};
