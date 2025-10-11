"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function FormSkeleton({
  rows = 3,
  cols = 2,
  showButton = true,
}: {
  rows?: number;
  cols?: number;
  showButton?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <div className="border-accent bg-background rounded-2xl border">
        <div className="space-y-6 p-6">
          {[...Array(rows)].map((_, rowIdx) => (
            <div key={rowIdx} className={`grid gap-6 md:grid-cols-${cols}`}>
              {[...Array(cols)].map((_, colIdx) => (
                <div key={colIdx} className="grid gap-2">
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ))}

          {showButton && (
            <div className="flex justify-center pt-4">
              <Skeleton className="h-8 w-40 rounded-md" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
