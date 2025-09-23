import { api } from "@/lib/axiosInterceptor";
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
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

  updateContact: async (
    contactId: string,
    data: z.infer<typeof contactFormSchema>
  ) => {
    const response = await api.patch(`${UPDATE_CONTACT}/${contactId}`, data);
    return response.data;
  },

  deleteContact: async () => {
    const response = await api.delete(DELETE_CONTACT);
    return response.data;
  },
};
