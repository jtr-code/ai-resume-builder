import { api } from "@/lib/axiosInterceptor";
import {
  CREATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  GET_ALL_EXPERIENCE,
  UPDATE_EXPERIENCE,
} from "./apiBaseUrls";
import { ExperienceFormValues } from "../schemas/experienceSchema";

export const experienceApi = {
  getAllExperience: async () => (await api.get(GET_ALL_EXPERIENCE)).data,

  createExperience: async (data: ExperienceFormValues) =>
    (await api.post(CREATE_EXPERIENCE, data)).data,

  updateExperience: async (experienceId: string, data: ExperienceFormValues) =>
    (await api.put(`${UPDATE_EXPERIENCE}/${experienceId}`, data)).data,

  deleteExperience: async (experienceId: string) =>
    (await api.delete(`${DELETE_EXPERIENCE}/${experienceId}`)).data,
};
