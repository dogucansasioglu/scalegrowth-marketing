import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import Image from "next/image";

export default function AboutMe() {
  return (
    <Container className="flex flex-col gap-20">
      <Header>👋 I&apos;m Doğucan, and I understand your problems.</Header>
      <div className="grid grid-cols-1 items-center justify-center gap-20 text-xl lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <p>
            I&apos;m a senior full-stack developer with over 8 years of
            experience. While building websites and landing pages for my
            clients, I noticed they all had the same problem: marketing was a
            maze. They found lots of tips and strategies online, but putting
            those into action was a whole different story. More often than not,
            the advice was too complicated, hard to follow, or just didn&apos;t
            work, leaving them lost and unsure about what to do next.
          </p>
          <p>
            I figured there had to be an easier way to get marketing that works.
            I believed in a clearer, simpler path to marketing success—one that
            didn&apos;t just add to the confusion or lead nowhere. That&apos;s
            why I founded ScaleGrowth Marketing. Our mission is simple: to
            simplify the marketing process for service-based businesses.{" "}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/about-me/about-me.jpg"
            alt="Doğucan's profile picture"
            width={600}
            height={600}
            className="h-auto w-fit"
          />
        </div>
      </div>
    </Container>
  );
}
