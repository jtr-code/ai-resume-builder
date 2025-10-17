import { useMutation, useQueryClient } from "@tanstack/react-query";
import { experienceApi } from "../api/experience.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";
import { ExperienceFormValues } from "../schemas/experienceSchema";

export const useCreateExperienceMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ExperienceFormValues) => experienceApi.createExperience(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
        queryClient.invalidateQueries({ queryKey: ["experience"] });
      }
    },
    onError: (error) => handleMutationError(error, "Failed to create experience"),
  });
};
