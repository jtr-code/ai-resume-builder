import { useQuery } from "@tanstack/react-query";
import { experienceApi } from "../api/experience.api";
import { toast } from "sonner";
import { handleMutationError } from "@/lib/errorHandler";

export const useExperienceAllQuery = () => {
  return useQuery({
    queryKey: ["experience"],
    queryFn: experienceApi.getAllExperience,
    refetchOnWindowFocus: false,
    onSuccess: (response) => {
      if (response.success && response.statusCode === 200) {
        toast.success(response.message);
      }
    },
    onError: (error) =>
      handleMutationError(error, "Failed to get all experience info"),
  });
};
