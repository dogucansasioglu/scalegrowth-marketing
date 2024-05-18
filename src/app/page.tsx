import { Hero } from "@/app/_components/hero";

export default async function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      {/* <Container>
        <Image
          src="/groweasy-funnel.jpg"
          alt="GrowEasy Funnel"
          width={1200}
          height={800}
        />
      </Container>
      <Problems />
      <AboutMe />
      <Benefits />
      <HowItWorks />
      <Features />
      <CTA /> */}
    </div>
  );
}
