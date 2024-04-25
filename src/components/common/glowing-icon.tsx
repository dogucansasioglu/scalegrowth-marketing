import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function GlowingIcon({
  children,
  className,
  containerClassName,
}: Props) {
  return (
    <div
      className={cn(
        "flex w-fit items-center justify-center rounded-full bg-muted p-3",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
