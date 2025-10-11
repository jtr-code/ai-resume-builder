import { useMutation } from "@tanstack/react-query";
import { experienceApi } from "../api/experience.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";
import { ExperienceFormValues } from "../schemas/experienceSchema";

export const useUpdateExperienceMutation = () => {
  return useMutation({
    mutationFn: ({ expId, data }: { expId: string; data: ExperienceFormValues }) =>
      experienceApi.updateExperience(expId, data),
    onSuccess: (response) => {
      if (response.success) toast.success(response.message);
    },
    onError: (error) => handleMutationError(error, "Failed to update experience"),
  });
};
