import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

export const useCreateContactMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: contactApi.createContact,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        router.push("/builder/experience");
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
      console.log("Failed to create contact", error);
    },
  });
};
