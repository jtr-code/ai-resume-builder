import { z } from "zod";

export const experienceSchema = z
  .object({
    jobTitle: z.string().min(1, "Job title is required"),
    companyName: z.string().min(1, "Company name is required"),
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),

    startMonth: z
      .number()
      .int()
      .min(1, "Start month must be between 1 and 12")
      .max(12, "Start month must be between 1 and 12"),
    startYear: z
      .number()
      .int()
      .min(1900, "Start year must be valid")
      .max(new Date().getFullYear(), "Start year cannot be in the future"),

    endMonth: z
      .number()
      .int()
      .min(1, "End month must be between 1 and 12")
      .max(12, "End month must be between 1 and 12")
      .optional(),
    endYear: z
      .number()
      .int()
      .min(1900, "End year must be valid")
      .max(new Date().getFullYear() + 1, "End year cannot be too far in the future")
      .optional(),

    currentlyWorkHere: z.boolean(),
    resumeId: z.uuid("Invalid resume ID"),
  })
  .refine(
    (data) =>
      data.currentlyWorkHere ||
      (data.endMonth !== undefined && data.endYear !== undefined),
    {
      message: "End month and end year are required if 'currentlyWorkHere' is false",
      path: ["endMonth"],
    }
  );

export type ExperienceFormValues = z.infer<typeof experienceSchema>;
