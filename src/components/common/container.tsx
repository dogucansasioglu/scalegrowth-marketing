import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({
  children,
  className,
  isFullWidth = false,
  size = "xl",
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto my-10 w-full px-4",
        size === "sm" && "max-w-xl",
        size === "md" && "max-w-2xl",
        size === "lg" && "max-w-3xl",
        size === "xl" && "max-w-7xl",
        isFullWidth && "max-w-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
