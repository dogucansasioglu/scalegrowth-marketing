import { Hero } from "@/app/_components/hero";
import { Problems } from "@/app/_components/problems";

export default async function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Problems />
      {/* <PainPoints /> */}
      {/* <CtaMid /> */}
      {/* <Process /> */}
    </div>
  );
}
