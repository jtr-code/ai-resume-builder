import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contact.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";
import { useState } from "react";

export const useUploadAvatarMutation = () => {
  const [progress, setProgress] = useState(0);
  const mutation = useMutation({
    mutationFn: (formData: FormData) =>
      contactApi.uploadAvatar(formData, setProgress),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        setProgress(0);
        return response.data.url;
      }
    },
    onError: (error) => {
      handleMutationError(error, "Failed to upload avatar");
      setProgress(0);
    },
  });

  return { ...mutation, progress };
};
