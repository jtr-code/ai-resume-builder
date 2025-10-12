import z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  dob: z.date({
    error: "Date of birth is required",
  }),
  image: z.url("Must be a valid URL").optional(),
  email: z.email("Invalid email"),
  phone: z.string().min(7, "Invalid phone number"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  pincode: z.string().min(4, "Invalid pincode"),
  linkedin: z.url("Must be a valid URL").optional().or(z.literal("")),
  website: z.url("Must be a valid URL").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
