"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { IForgotPwdForm } from "../types/auth.types";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";
import { useForgotPasswordMutation } from "../hooks/useForgotPasswordMutation";
import Link from "next/link";

export function ForgotPasswordForm() {
  const form = useForm<IForgotPwdForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useForgotPasswordMutation();

  const onSubmit: SubmitHandler<IForgotPwdForm> = (data: IForgotPwdForm) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Enter your email address to receive a password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="jtr@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  Send Reset Link
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
