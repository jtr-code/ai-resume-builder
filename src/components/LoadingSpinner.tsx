import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={cn(
          "relative h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent",
          className
        )}
      />
    </div>
  );
}
