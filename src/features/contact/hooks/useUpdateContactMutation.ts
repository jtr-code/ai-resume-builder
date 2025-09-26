import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { contactFormSchema } from "../schemas/contactSchema";
import z from "zod";

export const useUpdateContactMutation = (contactId: string) => {
  return useMutation({
    mutationFn: (data: z.infer<typeof contactFormSchema>) =>
      contactApi.updateContact(contactId, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
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
      console.log("Failed to update contact", error);
    },
  });
};
