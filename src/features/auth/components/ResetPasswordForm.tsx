"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPasswordSchema } from "../schemas/resetPasswordSchema";
import { IResetPwdForm } from "../types/auth.types";
import { useResetPasswordMutation } from "../hooks/useResetPasswordMutation";
import Link from "next/link";

export default function ResetPasswordForm({ token }: { token: string }) {
  const form = useForm<IResetPwdForm>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  const { mutate, isPending } = useResetPasswordMutation(token);

  const onSubmit: SubmitHandler<IResetPwdForm> = (data: IResetPwdForm) => {
    mutate(data);
    form.reset();
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Create a new password for your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="newPassword">New Password</FormLabel>
                      <FormControl>
                        <Input
                          id="newPassword"
                          placeholder="●●●●●●●●"
                          type="password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Changing" : "Change Password"}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            <Link href="/auth/signin" className="underline underline-offset-4">
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
