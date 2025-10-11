import { api } from "@/lib/axiosInterceptor";
import {
  CREATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  GET_ALL_EXPERIENCE,
  UPDATE_EXPERIENCE,
} from "./apiBaseUrls";
import { ExperienceFormValues } from "../schemas/experienceSchema";

export const experienceApi = {
  getAllExperience: async () => {
    const response = await api.get(GET_ALL_EXPERIENCE);
    return response.data;
  },
  createExperience: async (data: ExperienceFormValues) => {
    const response = await api.post(CREATE_EXPERIENCE, data);
    return response.data;
  },
  updateExperience: async (experienceId: string, data: ExperienceFormValues) => {
    const response = await api.put(`${UPDATE_EXPERIENCE}/${experienceId}`, data);
    return response.data;
  },
  deleteExperience: async (experienceId: string) => {
    const response = await api.delete(`${DELETE_EXPERIENCE}/${experienceId}`);
    return response.data;
  },
};
