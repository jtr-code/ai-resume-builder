import { useMutation } from "@tanstack/react-query";
import { experienceApi } from "../api/experience.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";

export const useDeleteExperienceMutation = () => {
  return useMutation({
    mutationFn: (experienceId: string) =>
      experienceApi.deleteExperience(experienceId),
    onSuccess: (response) => {
      if (response.success) toast.success(response.message);
    },
    onError: (error) => handleMutationError(error, "Failed to delete experience"),
  });
};
