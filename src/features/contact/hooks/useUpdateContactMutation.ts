import z from "zod";
import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { contactFormSchema } from "../schemas/contactSchema";
import { handleMutationError } from "@/lib/errorHandler";

export const useUpdateContactMutation = (contactId: string) => {
  return useMutation({
    mutationFn: (data: z.infer<typeof contactFormSchema>) =>
      contactApi.updateContact(contactId, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
      }
    },
    onError: (error) => handleMutationError(error, "Failed to update contact info"),
  });
};
