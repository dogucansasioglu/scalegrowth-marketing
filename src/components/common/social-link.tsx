import { type LucideIcon } from "lucide-react";
import Link from "next/link";

export interface SocialLinkType {
  Icon: LucideIcon;
  href: string;
}

export function SocialLink({ Icon, href }: SocialLinkType) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-2 transition duration-300 ease-in-out hover:scale-110 hover:text-primary"
    >
      <Icon size={24} />
    </Link>
  );
}
