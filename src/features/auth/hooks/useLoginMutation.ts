import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { authApi } from "../api/auth.api";

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: authApi.loginUser,
    onSuccess: (response) => {
      if (response.success && response.data.user) {
        toast.success(response.message);
        router.replace("/contact");
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
      console.log("Login failed:", error);
    },
  });
};
