import z from "zod";

export const loginSchema = z.object({
  email: z
    .email({ error: "Invalid email address" })
    .min(1, { error: "Email is required" }),
  password: z
    .string({ error: "Password must be a string" })
    .min(1, { error: "Password is required" })
    .min(8, { error: "Password must be at least 8 characters" }),
});
