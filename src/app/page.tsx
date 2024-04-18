import { Hero } from "@/app/_components/hero";
import { TopBenefits } from "@/app/_components/top-benefits";

export default async function Home() {
  return (
    <div className="flex flex-col gap-14">
      <Hero />
      <TopBenefits />
    </div>
  );
}
