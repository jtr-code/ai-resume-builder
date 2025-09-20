import z from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .email({ error: "Invalid email address" })
    .min(1, { error: "Email is required" }),
});
