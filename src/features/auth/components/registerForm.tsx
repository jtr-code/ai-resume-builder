"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IRegisterForm } from "../types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useRegisterMutation } from "../hooks/useRegisterMutation";

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useRegisterMutation();

  const onSubmit: SubmitHandler<IRegisterForm> = (data: IRegisterForm) => {
    mutate(data);
    reset();
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>Fill in your details to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  {...register("name")}
                />
                {errors?.name?.message && (
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>{errors.name.message}</AlertTitle>
                  </Alert>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  {...register("email")}
                />
                {errors?.email?.message && (
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>{errors.email.message}</AlertTitle>
                  </Alert>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register("password")}
                />
                {errors?.password?.message && (
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>{errors.password.message}</AlertTitle>
                  </Alert>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirm-password">Confirm Password *</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  {...register("confirmPassword")}
                />
                {errors?.confirmPassword?.message && (
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>{errors.confirmPassword.message}</AlertTitle>
                  </Alert>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Creating Account" : "Sign Up"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/signin" className="underline underline-offset-4">
                Sign In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
