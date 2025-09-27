import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";

export const useContact = () => {
  return useMutation({
    mutationFn: contactApi.getContact,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
      }
    },
    onError: (error) => handleMutationError(error, "Failed to get contact info"),
  });
};
