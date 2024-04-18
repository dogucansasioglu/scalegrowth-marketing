import { Hero } from "@/app/_components/hero";
import PainPoints from "@/app/_components/pain-points";
import { TopBenefits } from "@/app/_components/top-benefits";

export default async function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <TopBenefits />
      <PainPoints />
    </div>
  );
}
