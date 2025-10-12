import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";
import { useQueryClient } from "@tanstack/react-query";

export const useCreateContactMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: contactApi.createContact,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        queryClient.invalidateQueries({ queryKey: ["contact"] });
      }
    },
    onError: (error) => handleMutationError(error, "Failed to create contact"),
  });
};
