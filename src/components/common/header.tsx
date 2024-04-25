interface Props {
  children: React.ReactNode;
  TagName?: React.ElementType;
}

export function Header({ children, TagName = "h2" }: Props) {
  return (
    <TagName className="text-center text-5xl font-bold">{children}</TagName>
  );
}
