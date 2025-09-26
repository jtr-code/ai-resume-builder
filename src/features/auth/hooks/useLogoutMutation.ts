import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

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
      console.log("Logout failed:", error);
    },
  });
};
