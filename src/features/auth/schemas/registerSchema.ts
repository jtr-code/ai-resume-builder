import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string({ error: "Name must be a string" })
      .min(1, { error: "Name is required" })
      .max(15, { message: "Name must be at most 15 characters" }),

    email: z
      .email({ error: "Invalid email address" })
      .min(1, { error: "Email is required" }),

    password: z
      .string({ error: "Password must be a string" })
      .min(1, { error: "Password is required" })
      .min(8, { error: "Password must be at least 8 characters" }),

    confirmPassword: z
      .string({ error: "Confirm password must be a string" })
      .min(1, { error: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
