import AboutMe from "@/app/_components/about-me";
import { Benefits } from "@/app/_components/benefits";
import { Hero } from "@/app/_components/hero";
import { HowItWorks } from "@/app/_components/how-it-works";
import { Problems } from "@/app/_components/problems";

export default async function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Problems />
      <AboutMe />
      <Benefits />
      <HowItWorks />
    </div>
  );
}
