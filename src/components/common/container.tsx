import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Container({
  children,
  className,
  isFullWidth = false,
  size = "lg",
}: Props) {
  return (
    <div
      className={cn(
        "myw-full mx-auto my-10 px-4",
        size === "sm" && "max-w-xl",
        size === "md" && "max-w-2xl",
        size === "lg" && "max-w-7xl",
        isFullWidth && "max-w-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
