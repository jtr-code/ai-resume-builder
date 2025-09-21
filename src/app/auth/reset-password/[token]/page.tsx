"use client";

import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";
import { useParams } from "next/navigation";
import React from "react";

export default function ResetPasswordPage() {
  const { token } = useParams();

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <ResetPasswordForm token={typeof token === "string" ? token : ""} />
      </div>
    </div>
  );
}
