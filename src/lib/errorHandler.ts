import { toast } from "sonner";
import { AxiosError } from "axios";

export const handleMutationError = (error: unknown, fallbackMessage: string) => {
  let message = fallbackMessage;

  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as AxiosError<{ message: string }>;
    message = axiosError.response?.data?.message ?? axiosError.message ?? message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  toast.error(message);
  console.error(fallbackMessage, error);
};
