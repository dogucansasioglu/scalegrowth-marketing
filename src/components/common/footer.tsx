import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import {
  SocialLink,
  type SocialLinkType,
} from "@/components/common/social-link";
import { Github, Instagram, Twitter } from "lucide-react";

const socials: SocialLinkType[] = [
  {
    Icon: Twitter,
    href: "https://twitter.com/dogucansasioglu",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/nrkoz/",
  },
  {
    Icon: Github,
    href: "https://github.com/dogucansasioglu",
  },
];

export function Footer() {
  return (
    <Container className="mt-40 flex flex-col gap-20">
      <div className="h-0.5 w-full bg-secondary"></div>
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex gap-10">
          {socials.map((social, index) => (
            <SocialLink
              key={social.href + "-" + index}
              Icon={social.Icon}
              href={social.href}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
