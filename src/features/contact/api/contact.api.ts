import { api } from "@/lib/axiosInterceptor";
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPLOAD_AVATAR,
} from "./apiBaseUrls";
import { contactFormSchema } from "../schemas/contactSchema";
import z from "zod";

export const contactApi = {
  getContact: async () => {
    const response = await api.get(GET_CONTACT);
    return response.data;
  },

  createContact: async (data: z.infer<typeof contactFormSchema>) => {
    const response = await api.post(CREATE_CONTACT, data);
    return response.data;
  },

  deleteContact: async () => {
    const response = await api.delete(DELETE_CONTACT);
    return response.data;
  },

  uploadAvatar: async (
    formData: FormData,
    onProgress?: (progress: number) => void
  ) => {
    const response = await api.post(UPLOAD_AVATAR, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (event) => {
        if (event.total) {
          const percent = Math.round((event.loaded * 100) / event.total);
          onProgress?.(percent);
        }
      },
    });
    return response.data;
  },
};
