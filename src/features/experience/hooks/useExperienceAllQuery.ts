import { useMutation } from "@tanstack/react-query";
import { experienceApi } from "../api/experience.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";

export const useExperienceAllQuery = () => {
  return useMutation({
    mutationFn: experienceApi.getAllExperience,
    onSuccess: (response) => {
      if (response.success && response.statusCode === 200) {
        toast.success(response.message);
      }
    },
    onError: (error) =>
      handleMutationError(error, "Failed to get all experience info"),
  });
};
