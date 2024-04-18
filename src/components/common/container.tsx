import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto my-10 w-full max-w-6xl px-4", className)}>
      {children}
    </div>
  );
}
