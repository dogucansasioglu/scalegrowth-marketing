import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  TagName?: React.ElementType;
  className?: string;
}

export function Header({ children, TagName = "h2", className }: Props) {
  return (
    <TagName
      className={cn("text-center text-4xl font-bold md:text-5xl", className)}
    >
      {children}
    </TagName>
  );
}
