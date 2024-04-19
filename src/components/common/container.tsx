import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export default function Container({
  children,
  className,
  isFullWidth = false,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto my-10 w-full max-w-7xl px-4",
        isFullWidth && "max-w-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
