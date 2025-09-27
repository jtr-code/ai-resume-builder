import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";

export const useUploadAvatarMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) => contactApi.uploadAvatar(formData),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        return response.data.url;
      }
    },
    onError: (error) => handleMutationError(error, "Failed to upload avatar"),
  });
};
