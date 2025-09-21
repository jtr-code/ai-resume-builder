import z from "zod";

export const resetPasswordSchema = z.object({
  newPassword: z
    .string({ error: "Password must be a string" })
    .min(1, { error: "Password is required" })
    .min(8, { error: "Password must be at least 8 characters" }),
});
