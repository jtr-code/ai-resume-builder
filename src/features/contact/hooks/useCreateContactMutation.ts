import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";

export const useCreateContactMutation = () => {
  return useMutation({
    mutationFn: contactApi.createContact,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
      }
    },
    onError: (error) => handleMutationError(error, "Failed to create contact"),
  });
};
